import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { SignInSchema } from "@/validators/auth";
import { getUserByEmail } from "@/utility/user";
import bcrypt from "bcryptjs";

export const authConfig = {
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
  callbacks: {},
  providers: [
    Credentials({
      async authorize(credentials) {
        const body = await SignInSchema.safeParseAsync(credentials);
        if (!body.success) {
          return null;
        }
        const { email, password } = body.data;
        const user = await getUserByEmail(email);
        if (!user || !user.password || !user.emailVerified) return null;
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return null;

        return user;
      },
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
