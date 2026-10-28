import { useQuery } from "@tanstack/react-query";
import { getAdoptionData } from "../api/adoptionApi";

export function useAdoption() {
  return useQuery({ queryKey: ["adoption"], queryFn: getAdoptionData, staleTime: 300_000 });
}
