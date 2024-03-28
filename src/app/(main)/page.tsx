import { Fragment } from "react";
import { Hero } from "@/components/hero";
import { Banner } from "@/components/banner";
import { Faq } from "@/components/faq";
import { Testimonial } from "@/components/testimonial";

export const metadata = {
  title: {
    absolute: "Craft a Stunning Portfolio in minutes.",
  },
  description: `Easily build a striking portfolio with Portify. Showcase your work
    effortlessly and make a lasting impression.`,
};

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Testimonial />
      <Faq />
      <Banner />
    </Fragment>
  );
}
