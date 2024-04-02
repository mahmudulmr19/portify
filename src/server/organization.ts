"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function getOrganization(name: string, userId: string) {
  try {
    if (name === "dashboard") {
      return await db.organization.findFirst({
        where: { userId },
      });
    }

    return await db.organization.findUnique({ where: { name } });
  } catch (error) {
    console.log("Error getting organization: getOrganization", error);
    return null;
  }
}

export async function createOrganization(name: string) {
  try {
    const session = await auth();
    await db.organization.create({ data: { name, userId: session?.user?.id } });

    return {
      success: "Organization created successfully",
    };
  } catch (error) {
    console.log("Error creating organization: createOrganization", error);
    return {
      error: "Could not create organization",
    };
  }
}
