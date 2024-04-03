import { OnboardForm } from "@/components";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

async function getOrganization(userId: string) {
  try {
    const data = await db.organization.findFirst({ where: { userId } });
    return !!data;
  } catch (error) {
    return null;
  }
}

export default async function Page() {
  const session = await auth();
  const organization = await getOrganization(session?.user?.id!);
  if (organization) {
    redirect("/dashboard");
  }
  return (
    <div className="container py-20 sm:py-24 md:py-28 lg:py-32 flex items-center justify-center">
      <OnboardForm />
    </div>
  );
}
