import mongoose from "mongoose";
import { Pool as PgPool, type PoolConfig } from "pg";
import mysql, { type Pool as MySQLPool, type RowDataPacket } from "mysql2/promise";

export type DatabaseType = "mongodb" | "postgres" | "mysql";

let pgPool: PgPool | null = null;
let mysqlPool: MySQLPool | null = null;

function ensureEnv(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function connectMongo(uri?: string) {
  const mongoUri = uri || process.env.MONGODB_URI;
  ensureEnv(mongoUri, "MONGODB_URI");

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  mongoose.set("strictQuery", false);
  await mongoose.connect(mongoUri as string, {
    autoIndex: true,
  });

  return mongoose.connection;
}

export function getMongoConnection() {
  if (mongoose.connection.readyState !== 1) {
    throw new Error("MongoDB is not connected. Call connectMongo() first.");
  }

  return mongoose.connection;
}

export async function connectPostgres(uri?: string) {
  const connectionString = uri || process.env.DATABASE_URL;
  ensureEnv(connectionString, "DATABASE_URL");

  if (pgPool) {
    return pgPool;
  }

  const config: PoolConfig = {
    connectionString,
  };

  pgPool = new PgPool(config);
  await pgPool.query("SELECT 1");
  return pgPool;
}

export async function queryPostgres<T extends Record<string, unknown> = Record<string, unknown>>(query: string, values?: unknown[]) {
  const pool = await connectPostgres();
  return pool.query<T>(query, values ?? []);
}

export async function connectMySQL(uri?: string) {
  const connectionString = uri || process.env.MYSQL_URL;
  ensureEnv(connectionString, "MYSQL_URL");

  if (mysqlPool) {
    return mysqlPool;
  }

  mysqlPool = mysql.createPool({
    uri: connectionString as string,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  await mysqlPool.query("SELECT 1");
  return mysqlPool;
}

export async function queryMySQL(query: string, values?: unknown[]) {
  const pool = await connectMySQL();
  const [rows] = await pool.query<RowDataPacket[]>(query, values ?? []);
  return rows;
}

export async function connectDatabase(type: DatabaseType, uri?: string) {
  switch (type) {
    case "mongodb":
      return connectMongo(uri);
    case "postgres":
      return connectPostgres(uri);
    case "mysql":
      return connectMySQL(uri);
    default:
      throw new Error(`Unsupported database type: ${type}`);
  }
}

export async function queryDatabase(type: "postgres" | "mysql", query: string, values?: unknown[]) {
  switch (type) {
    case "postgres":
      return queryPostgres(query, values);
    case "mysql":
      return queryMySQL(query, values);
    default:
      throw new Error(`queryDatabase only supports SQL databases: postgres or mysql. Received ${type}`);
  }
}
