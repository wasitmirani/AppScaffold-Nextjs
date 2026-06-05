import fs from "fs/promises";
import path from "path";

export type LogLevel = "debug" | "info" | "warning" | "error";

const LOG_DIR = process.env.LOG_DIR || path.join(process.cwd(), "storage", "logs");
const ENVIRONMENT = process.env.APP_ENV || process.env.NODE_ENV || "local";

function formatTimestamp(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

function getLogFilePath(date = new Date()) {
  const fileName = `laravel-${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}.log`;
  return path.join(LOG_DIR, fileName);
}

function normalizeMeta(meta?: Record<string, unknown> | Error) {
  if (!meta) {
    return undefined;
  }

  if (meta instanceof Error) {
    return {
      name: meta.name,
      message: meta.message,
      stack: meta.stack,
    };
  }

  return meta;
}

function formatLine(level: LogLevel, message: string, meta?: Record<string, unknown> | Error) {
  const timestamp = formatTimestamp();
  const levelLabel = level.toUpperCase();
  const normalizedMeta = normalizeMeta(meta);
  const context = normalizedMeta && Object.keys(normalizedMeta).length ? ` ${JSON.stringify(normalizedMeta)}` : "";

  return `[${timestamp}] ${ENVIRONMENT}.${levelLabel}: ${message}${context}\n`;
}

async function ensureLogDirectory() {
  await fs.mkdir(LOG_DIR, { recursive: true });
}

export async function writeLog(level: LogLevel, message: string, meta?: Record<string, unknown> | Error) {
  await ensureLogDirectory();
  const line = formatLine(level, message, meta);
  await fs.appendFile(getLogFilePath(), line, "utf8");
}

export async function debug(message: string, meta?: Record<string, unknown> | Error) {
  return writeLog("debug", message, meta);
}

export async function info(message: string, meta?: Record<string, unknown> | Error) {
  return writeLog("info", message, meta);
}

export async function warning(message: string, meta?: Record<string, unknown> | Error) {
  return writeLog("warning", message, meta);
}

export async function error(message: string, meta?: Record<string, unknown> | Error) {
  return writeLog("error", message, meta);
}

export const logger = {
  writeLog,
  debug,
  info,
  warning,
  error,
};
