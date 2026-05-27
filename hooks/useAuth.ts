"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

/**
 * Hook for using current auth session
 * @returns { session, status, user, isLoading }
 */
export function useAuth() {
  const { data: session, status } = useSession();

  return {
    session,
    user: session?.user,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
    status,
  };
}

/**
 * Hook for user role checking
 * @returns function to check if user has specific role
 */
export function useRole() {
  const { user } = useAuth();

  const hasRole = useCallback(
    (role: string | string[]) => {
      if (!user) return false;
      const userRole = (user as any).role;
      if (Array.isArray(role)) {
        return role.includes(userRole);
      }
      return userRole === role;
    },
    [user]
  );

  const isTeacher = useCallback(
    () => hasRole("TEACHER"),
    [hasRole]
  );

  const isStudent = useCallback(
    () => hasRole("STUDENT"),
    [hasRole]
  );

  const isAdmin = useCallback(
    () => hasRole("ADMIN"),
    [hasRole]
  );

  return { hasRole, isTeacher, isStudent, isAdmin };
}

/**
 * Hook for login functionality
 */
export function useLogin() {
  const router = useRouter();

  const login = useCallback(
    async (email: string, password: string) => {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        return {
          success: false,
          error: result.error || "Invalid credentials",
        };
      }

      // Redirect based on user role
      const session = await fetch("/api/auth/session").then((r) => r.json());
      const userRole = session?.user?.role;

      if (userRole === "TEACHER") {
        router.push("/teacher/dashboard");
      } else if (userRole === "STUDENT") {
        router.push("/student/dashboard");
      } else if (userRole === "ADMIN") {
        router.push("/admin/dashboard");
      } else {
        router.push("/dashboard");
      }

      return { success: true };
    },
    [router]
  );

  return { login };
}

/**
 * Hook for signup functionality
 */
export function useSignup() {
  const { login } = useLogin();

  const signup = useCallback(
    async (
      email: string,
      password: string,
      confirmPassword: string,
      name: string,
      role: string = "STUDENT"
    ) => {
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            confirmPassword,
            name,
            role,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          return {
            success: false,
            error: data.error || "Signup failed",
          };
        }

        // Auto-login after signup
        const loginResult = await login(email, password);
        return loginResult;
      } catch (error) {
        return {
          success: false,
          error: "An error occurred during signup",
        };
      }
    },
    [login]
  );

  return { signup };
}

/**
 * Hook for logout functionality
 */
export function useLogout() {
  const router = useRouter();

  const logout = useCallback(async () => {
    await signOut({ redirect: false });
    router.push("/login");
  }, [router]);

  return { logout };
}
