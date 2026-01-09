import { createFileRoute } from "@tanstack/react-router";
import { eq } from "drizzle-orm";
import { hashPassword, generateToken } from "@/lib/auth";
import { database } from "@/db";
import { users } from "@/db/schema";

export const Route = createFileRoute("/api/auth/register")({
  component: RegisterComponent,
});

async function RegisterComponent() {
  // This is an API route, so we handle the request here
  // Get the request from the global scope
  const request: Request = {} as Request;

  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "Name, email, and password are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if user already exists
    const existingUser = await database
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      return new Response(
        JSON.stringify({ message: "User with this email already exists" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create the new user
    const newUser = await database
      .insert(users)
      .values({
        name,
        email,
        password: hashedPassword,
      })
      .returning();

    // Generate token for the new user
    const token = generateToken({
      userId: newUser[0].id,
      email: newUser[0].email,
      name: newUser[0].name,
    });

    return new Response(
      JSON.stringify({
        token,
        user: {
          id: newUser[0].id,
          email: newUser[0].email,
          name: newUser[0].name,
        },
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
