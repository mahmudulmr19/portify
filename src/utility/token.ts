import { db } from "@/lib/db";
import { Token, TokenType } from "@prisma/client";
import crypto from "crypto";

export async function getTokenById(id: string): Promise<Token | null> {
  const token = await db.token.findUnique({ where: { id } });
  return token;
}

export async function getTokenByEmail(email: string): Promise<Token | null> {
  const token = await db.token.findFirst({ where: { email } });
  return token;
}

export async function generateToken(email: string, token_type: TokenType) {
  const existingToken = await db.token.findFirst({
    where: { email, token_type },
  });
  if (existingToken) {
    await db.token.delete({ where: { id: existingToken.id } });
  }
  const token = crypto.randomBytes(32).toString("hex");
  const newToken = await db.token.create({
    data: { token, email, token_type },
  });
  return newToken.token;
}
