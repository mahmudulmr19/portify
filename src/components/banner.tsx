import { WidthWrapper } from "@/components";
import { Button } from "@/components/ui";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Banner() {
  return (
    <div className="mt-32 bg-primary text-white py-8">
      <WidthWrapper className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl min-[472px]:text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Ready to Get Started?
        </h2>

        <Button asChild variant="white">
          <Link href="/auth/sign-up">
            Start for free <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </WidthWrapper>
    </div>
  );
}
