"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // This would typically check user role and redirect appropriately
    // For now, we'll redirect to a placeholder
    router.push("/teacher/dashboard");
  }, [router]);

  return null;
}