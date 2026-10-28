import { useQuery } from "@tanstack/react-query";
import { getPrograms } from "../api/programsApi";

export function usePrograms() {
  return useQuery({ queryKey: ["programs"], queryFn: getPrograms, staleTime: 300_000 });
}
