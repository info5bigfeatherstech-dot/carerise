import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../api/faqApi";

export function useFaqs() {
  return useQuery({ queryKey: ["faqs"], queryFn: getFaqs, staleTime: 300_000 });
}
