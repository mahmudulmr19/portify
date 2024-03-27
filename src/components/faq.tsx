import { WidthWrapper } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants/faq";
import Link from "next/link";

export function Faq() {
  return (
    <WidthWrapper className="space-y-4 sm:space-y-8 md:space-y-12 lg:space-y-16">
      <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-center">
        <h2 className="text-2xl min-[472px]:text-3xl sm:text-4xl md:text-5xl font-semibold">
          Have any <span className="text-primary">question</span> on mind? We’ll
          answer it!
        </h2>
      </div>
      <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={item.question}>
              <AccordionTrigger className="text-start">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-sm text-gray-700 mt-4">
          Couldn’t find something?{" "}
          <Link href="/contact" className="text-primary">
            Message Us
          </Link>
        </p>
      </div>
    </WidthWrapper>
  );
}
