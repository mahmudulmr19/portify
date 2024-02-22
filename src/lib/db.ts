import { PrismaClient } from "@prisma/client";
const env = process.env;

const global = globalThis as unknown as {
  db: PrismaClient | undefined;
};

export const db = global.db ?? new PrismaClient();

if (env.NODE_ENV !== "production") global.db = db;
