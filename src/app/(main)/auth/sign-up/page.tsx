import { SignUpForm } from "@/components/auth/sign-up-form";

export const metadata = {
  title: {
    absolute: "Sign Up",
  },
  description: "Sign up for an account",
};

export default function Page() {
  return <SignUpForm />;
}
