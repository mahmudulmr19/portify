import { auth } from "@/auth";
import { Logo, MobileNav, WidthWrapper } from "@/components";
import { Button } from "@/components/ui";
import Link from "next/link";

export async function Navbar() {
  const session = await auth();
  return (
    <nav
      role="navigation"
      className="sticky inset-x-0 top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all"
    >
      <WidthWrapper>
        <div className="flex items-center justify-between h-14">
          <Logo />

          <MobileNav />
          <div className="hidden sm:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/features">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            {session?.user ? (
              <Button asChild variant="ghost">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/auth/sign-in"> Sign in</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/sign-up">Start for free</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </WidthWrapper>
    </nav>
  );
}
