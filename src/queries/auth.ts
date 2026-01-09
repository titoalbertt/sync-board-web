import { queryOptions } from "@tanstack/react-query";
import { authService } from "@/services/authService";

export const loginQuery = (email: string, password: string) =>
  queryOptions({
    queryKey: ["auth", "login"],
    queryFn: () => authService.login(email, password),
    enabled: false, // This should be triggered manually, not on component mount
  });

export const registerQuery = (name: string, email: string, password: string) =>
  queryOptions({
    queryKey: ["auth", "register"],
    queryFn: () => authService.register(name, email, password),
    enabled: false, // This should be triggered manually, not on component mount
  });
