import { WidthWrapper } from "@/components";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/constants/testimonials";

export function Testimonial() {
  return (
    <WidthWrapper className="space-y-4 sm:space-y-8 md:space-y-12 lg:space-y-16 mb-32">
      <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-center">
        <h2 className="text-2xl min-[472px]:text-3xl sm:text-4xl md:text-5xl font-semibold">
          What Our <span className="text-primary">Customers</span> Say?
        </h2>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </WidthWrapper>
  );
}
