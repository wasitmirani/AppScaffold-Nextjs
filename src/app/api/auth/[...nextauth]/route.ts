import NextAuth from "next-auth";
import type { Account, NextAuthOptions, Profile, Session, User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "password",
  },
];

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = users.find(
          (record) =>
            record.email === credentials.email && record.password === credentials.password,
        );

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt(params: {
      token: JWT;
      user?: User | AdapterUser;
      account?: Account | null;
      profile?: Profile | undefined;
      trigger?: "signIn" | "signUp" | "update";
      isNewUser?: boolean;
      session?: Session | undefined;
    }) {
      const { token, user } = params;

      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },
    async session(params: { session: Session; token: JWT; user?: User | AdapterUser }) {
      const { session, token } = params;
      const sessionUser = session.user as { id?: string; name?: string | null; email?: string | null };

      if (sessionUser) {
        sessionUser.id = token.id as string;
        sessionUser.name = token.name as string;
        sessionUser.email = token.email as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
