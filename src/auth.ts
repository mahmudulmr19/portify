import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  callbacks: {
    session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name!;
        session.user.email = token.email!;
        session.user.image = token.image as string;
        session.user.emailVerified = token.emailVerified as Date;
        // @ts-ignore
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token, user }) {
      const userId = token.sub;
      if (!userId) return token;

      const dbUser = await db.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          emailVerified: true,
          role: true,
        },
      });

      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      return dbUser;
    },
  },
  ...authConfig,
});
