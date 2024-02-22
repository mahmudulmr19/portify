"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRightIcon,
  Cross2Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const links = [
  {
    label: "Try for free!",
    href: "/auth/sign-up",
    cta: true,
  },
  {
    label: "Sign in",
    href: "/auth/sign-in",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function MobileNav() {
  const [open, setOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  const toggleOpen = React.useCallback(() => {
    setOpen((prev) => !prev);
    document.body.style.overflow = open ? "visible" : "hidden";
  }, [open]);

  React.useEffect(() => {
    if (open) toggleOpen();
  }, [pathname]); // eslint-disable-line

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className="sm:hidden">
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleOpen}
        className="z-30 relative"
      >
        {open ? (
          <Cross2Icon className="h-5 w-5" />
        ) : (
          <HamburgerMenuIcon className="h-5 w-5" />
        )}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-0 w-full"
            initial={{ opacity: 0, x: "100%", y: "-100%" }}
            animate={{
              opacity: open ? 1 : 0,
              x: open ? 0 : "100%",
              y: open ? 0 : "-100%",
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <ul className="grid w-full gap-3 px-10 py-16 bg-white rounded-md">
              {links.map((link, index) => (
                <React.Fragment key={link.label}>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link
                      onClick={() => closeOnCurrent(link.href)}
                      className={cn(
                        "flex items-center w-full font-semibold",
                        link.cta && "text-primary gap-x-2"
                      )}
                      href={link.href}
                    >
                      {link.label}
                      {link.cta && <ArrowRightIcon />}
                    </Link>
                  </motion.li>
                  {index < links.length - 1 && (
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="my-3 h-px w-full bg-gray-300"
                    />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
