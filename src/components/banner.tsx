import { WidthWrapper } from "@/components";
import { Button } from "@/components/ui";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Banner() {
  return (
    <div className="mt-32 bg-primary text-white py-8">
      <WidthWrapper>
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-4">
          Craft your portfolio with ease. Join Portify today!
        </p>
        <Button size="lg" asChild variant="white">
          <Link href="/auth/sign-up">
            Start for free <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </WidthWrapper>
    </div>
  );
}
