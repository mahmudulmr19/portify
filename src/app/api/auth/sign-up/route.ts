import { SignUpSchema } from "@/validators/auth";
import { NextResponse } from "next/server";
import { getUserByEmail } from "@/utility/user";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await SignUpSchema.safeParseAsync(req.body);
    if (!body.success) {
      return NextResponse.json({ message: "Invalid body data" });
    }
    const { name, email, password } = body.data;
    const existUser = await getUserByEmail(email);
    if (existUser) {
      return NextResponse.json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: { name, email, password: hashedPassword },
    });

    // TODO: send verification email into the user email
    return NextResponse.json({ message: "Confirmation email sent!" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
