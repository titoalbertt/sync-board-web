import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { authService } from "@/services/authService";

export const loginFn = createServerFn()
  .inputValidator(
    z.object({
      email: z.string().email("Invalid email format"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    })
  )
  .handler(async ({ data }) => {
    return await authService.login(data.email, data.password);
  });

export const registerFn = createServerFn()
  .inputValidator(
    z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Invalid email format"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    })
  )
  .handler(async ({ data }) => {
    return await authService.register(data.name, data.email, data.password);
  });
