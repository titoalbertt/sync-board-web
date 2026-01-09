import { loginUseCase, registerUseCase } from "@/use-cases/authUseCase";

export const authService = {
  async login(email: string, password: string) {
    return await loginUseCase({ email, password });
  },

  async register(name: string, email: string, password: string) {
    return await registerUseCase({ name, email, password });
  },
};
