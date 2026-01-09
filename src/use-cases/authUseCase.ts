import {
  getUserByEmail,
  createUser,
  updateUserLastLogin,
} from "@/data-access/users";
import { generateToken } from "@/lib/auth";

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface AuthResult {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

export const loginUseCase = async (input: LoginInput): Promise<AuthResult> => {
  const user = await getUserByEmail(input.email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const { verifyPassword } = await import("@/lib/auth");
  const isPasswordValid = await verifyPassword(input.password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  await updateUserLastLogin(user.id);

  const token = generateToken({
    userId: user.id,
    email: user.email,
    name: user.name,
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  };
};

export const registerUseCase = async (
  input: RegisterInput
): Promise<AuthResult> => {
  const existingUser = await getUserByEmail(input.email);

  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const newUser = await createUser(input);

  const token = generateToken({
    userId: newUser.id,
    email: newUser.email,
    name: newUser.name,
  });

  return {
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    },
    token,
  };
};
