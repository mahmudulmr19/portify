"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { generateSlug } from "@/utility/slug";

export async function getOrganization(url: string, userId: string) {
  try {
    if (url === "dashboard") {
      return await db.organization.findFirst({
        where: { userId },
      });
    }

    await db.organization.findUnique({ where: { url } });
  } catch (error) {
    console.log("Error getting organization: getOrganization", error);
    return null;
  }
}

export async function createOrganization(name: string) {
  try {
    const session = await auth();
    await db.organization.create({
      data: { name, userId: session?.user?.id, url: generateSlug(name) },
    });

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
