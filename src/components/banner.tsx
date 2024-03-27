import { WidthWrapper } from "@/components";
import { Button } from "@/components/ui";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Banner() {
  return (
    <WidthWrapper className="mb-12 mt-28  flex flex-col items-center justify-center text-center relative isolate overflow-hidden ">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>

      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          Portify is now public!
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Craft a stunning{" "}
        <span className="text-primary tracking-wide">Portfolio</span> in
        minutes.
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        Easily build a striking portfolio with Portify. Showcase your work
        effortlessly and make a lasting impression.
      </p>

      <Button asChild className="mt-5" size="lg">
        <Link href="/auth/sign-up">
          Try for free! <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </WidthWrapper>
  );
}
