import { z } from "zod";

const SignInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
});

const SignUpSchema = SignInSchema.extend({
  name: z.string({ required_error: "Name is required" }),
});

export type SignInValues = z.infer<typeof SignInSchema>;
export type SignUpValues = z.infer<typeof SignUpSchema>;
export { SignInSchema, SignUpSchema };
