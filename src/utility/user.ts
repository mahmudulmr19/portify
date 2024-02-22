import { db } from "@/lib/db";
import { User } from "@prisma/client";

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    console.log("Error getting user: getUserByEmail", error);
    return null;
  }
}

export async function getUserById(id: string): Promise<User | null> {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    console.log("Error getting user: getUserById", error);
    return null;
  }
}
