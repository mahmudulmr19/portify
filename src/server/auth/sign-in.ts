"use server";
import { signIn } from "@/auth";
import { sendVerificationEmail } from "@/emails/emails";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function SignIn(data: { email: string; password: string }) {
  try {
    const { email, password } = data;
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
      return { error: "User does not exist!" };
    }
    if (!user.password) {
      return { error: "Please sign in different provider!" };
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return { error: "Invalid password!" };
    }

    if (!user.emailVerified) {
      await sendVerificationEmail(email);
      return { success: "Confirmation email sent!" };
    }

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { redirect: true };
  } catch (error: any) {
    console.log("Could not sign in", error);
    return {
      error: error.message || "Something went wrong!",
    };
  }
}
