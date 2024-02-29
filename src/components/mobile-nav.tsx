"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/hooks/use-dimensions";
import { Fade as Hamburger } from "hamburger-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/nav";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 700}px at calc(100vw - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at calc(100vw - 50px) 30px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      duration: 0.5,
    },
  },
};

const navigation = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navLinkItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export function MobileNav() {
  const [open, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);
  const pathname = usePathname();

  React.useEffect(() => {
    if (open) toggleOpen();
  }, [pathname]); // eslint-disable-line

  const closeOnCurrent = (href: string) => pathname === href && toggleOpen();

  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="sm:hidden"
    >
      <motion.div
        className={cn(
          "absolute top-0 left-0 bottom-0 w-full h-screen bg-white"
        )}
        variants={sidebar}
      />

      <motion.ul
        variants={navigation}
        hidden={true}
        className="absolute p-7 px-10 py-16 w-full left-0 right-0 grid gap-3"
      >
        {navLinks.map((link, index) => (
          <React.Fragment key={link.label}>
            <motion.li variants={navLinkItem}>
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
            {index < navLinks.length - 1 && (
              <motion.li
                variants={navLinkItem}
                className="my-3 h-px w-full bg-gray-300"
              />
            )}
          </React.Fragment>
        ))}
      </motion.ul>
      <Hamburger size={20} direction="left" onToggle={() => toggleOpen()} />
    </motion.div>
  );
}
