import { CardWrapper } from "@/components/auth";
import { FormStatus } from "@/components/ui";
import { verifyEmail } from "@/server/auth";

export default async function VerifyEmailPage({
  searchParams: { token },
}: {
  searchParams: {
    token: string;
  };
}) {
  const result = await verifyEmail(token);

  return (
    <CardWrapper
      label="Confirming your email verification"
      backButtonHref="/auth/sign-in"
      backButtonLabel="Back to sign in"
    >
      <FormStatus type={result.type} message={result.message} />
    </CardWrapper>
  );
}
