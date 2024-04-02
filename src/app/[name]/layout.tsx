import React from "react";
import { auth } from "@/auth";
import { getOrganization } from "@/server/organization";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    name: string;
  };
}) {
  const session = await auth();
  const name = params.name;
  const organization = await getOrganization(name, session?.user?.id!);

  if (!organization) {
    return redirect("/onboarding");
  }

  return <div>{children}</div>;
}
