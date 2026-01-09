import { createFileRoute } from "@tanstack/react-router";
import { eq } from "drizzle-orm";
import { verifyPassword, generateToken } from "@/lib/auth";
import { database } from "@/db";
import { users } from "@/db/schema";

export const Route = createFileRoute("/api/auth/login")({
  component: LoginComponent,
});

async function LoginComponent() {
  // This is an API route, so we handle the request here
  // Get the request from the global scope
  const request: Request = {} as Request;

  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const [user] = await database
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const token = generateToken({
      userId: user.id,
      email: user.email,
      name: user.name,
    });

    return new Response(
      JSON.stringify({
        token,
        user: { id: user.id, email: user.email, name: user.name },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
