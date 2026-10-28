import { useQuery } from "@tanstack/react-query";
import { getImpactStats } from "../api/statsApi";

export function useImpactStats() {
  return useQuery({ queryKey: ["impact-stats"], queryFn: getImpactStats, staleTime: 300_000 });
}
