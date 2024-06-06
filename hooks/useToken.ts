"use client";

import { useSearchParams } from "next/navigation";
export default function useToken() {
  const searca = useSearchParams();
  const data = searca.get("token");

  return data;
}
