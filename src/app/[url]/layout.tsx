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
    url: string;
  };
}) {
  const session = await auth();
  const url = params.url;
  const organization = await getOrganization(url, session?.user?.id!);

  if (!organization) {
    return redirect("/onboarding");
  }

  return <div>{children}</div>;
}
