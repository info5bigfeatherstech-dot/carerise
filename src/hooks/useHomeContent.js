import { useQuery } from "@tanstack/react-query";
import { getHomeContent } from "../api/heroApi";

export function useHomeContent() {
  return useQuery({
    queryKey: ["home-content"],
    queryFn: getHomeContent,
    staleTime: 300_000,
  });
}
