import { useQuery } from "@tanstack/react-query";
import { getPagesContent } from "../api/pagesApi";

export function usePagesContent() {
  return useQuery({ queryKey: ["pages-content"], queryFn: getPagesContent, staleTime: 300_000 });
}
