import { SignInForm } from "@/components/auth/sign-in-form";

export const metadata = {
  title: {
    absolute: "Sign In",
  },
  description: "Sign in to your account",
};

export default function SignInPage() {
  return <SignInForm />;
}
