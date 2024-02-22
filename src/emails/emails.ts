import { mail } from "@/emails/mail";
import { generateToken } from "@/utility/token";
import { VerifyEmailHtml } from "@/emails/html";

const DOMAIN = process.env.NEXT_PUBLIC_APP_URL;

export async function sendVerificationEmail(email: string) {
  const token = await generateToken(email, "verify_email");
  const url = `${DOMAIN}/auth/verify-email?token=${token}`;
  await mail.sendMail(email, "Verify your email", VerifyEmailHtml(url));
}
