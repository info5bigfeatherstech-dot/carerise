import { useQuery } from "@tanstack/react-query";
import { getTestimonials } from "../api/testimonialsApi";

export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
    staleTime: 300_000,
  });
}
