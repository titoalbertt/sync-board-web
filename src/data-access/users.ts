import { database } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hashPassword } from "@/lib/auth";

export const getUserById = async (id: string) => {
  const [user] = await database
    .select()
    .from(users)
    .where(eq(users.id, id))
    .limit(1);

  return user || null;
};

export const getUserByEmail = async (email: string) => {
  const [user] = await database
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return user || null;
};

export const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const hashedPassword = await hashPassword(userData.password);

  const [newUser] = await database
    .insert(users)
    .values({
      ...userData,
      password: hashedPassword,
    })
    .returning();

  return newUser;
};

export const updateUserLastLogin = async (id: string) => {
  await database
    .update(users)
    .set({ updatedAt: new Date() })
    .where(eq(users.id, id));
};
