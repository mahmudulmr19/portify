"use server";

import { db } from "@/lib/db";
import { getTokenByToken } from "@/utility/token";

export async function verifyEmail(token: string): Promise<{
  type: "error" | "success";
  message: string;
}> {
  try {
    if (!token) {
      return {
        type: "error",
        message: "Missing token",
      };
    }
    const data = await getTokenByToken(token);
    if (!data) {
      return {
        type: "error",
        message: "Invalid token!",
      };
    }
    const now = new Date();
    if (now > data.expires) {
      return {
        type: "error",
        message: "Token has expired!",
      };
    }
    await db.user.update({
      where: { email: data.email },
      data: { emailVerified: now },
    });
    await db.token.delete({ where: { token } });
    return {
      type: "success",
      message: "Email verified successfully!",
    };
  } catch (error: any) {
    return {
      type: "error",
      message: error.message,
    };
  }
}
