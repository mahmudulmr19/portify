import React from "react";
import { Logo, WidthWrapper } from "@/components";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { Button } from "./ui";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/50 py-8 backdrop-blur-lg">
      <WidthWrapper className="pt-10">
        <div className="lg:grid lg:grid-cols-5 lg:gap-8">
          <div className="space-y-6 lg:col-span-2">
            <Logo />
            <p className="max-w-xs text-sm text-gray-500">
              Create a standout portfolio effortlessly with Portify&apos;s
              seamless SAAS app.
            </p>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                asChild
                className="rounded-md"
                size="icon"
              >
                <Link
                  href="https://www.youtube.com/@orbainnovations"
                  target="_blank"
                >
                  <span className="sr-only">YouTube</span>
                  <FaYoutube className="h-5 w-5 text-gray-600" />
                </Link>
              </Button>
              <div className="h-8 border-l border-gray-200"></div>
              <Button
                variant="ghost"
                asChild
                className="rounded-md"
                size="icon"
              >
                <Link
                  href="https://www.facebook.com/orbainnovations"
                  target="_blank"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="h-5 w-5 text-gray-600" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-8 lg:col-span-3 lg:mt-0">
            <div className="mt-10 lg:mt-0">
              <h3 className="text-sm font-semibold text-gray-600">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/support"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/legal/privacy"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/legal/terms"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-10 lg:mt-0">
              <h3 className="text-sm font-semibold text-gray-600">Community</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="https://www.facebook.com/orbainnovations"
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="https://www.youtube.com/@orbainnovations"
                    target="_blank"
                  >
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-500">
            Copyright © {new Date().getFullYear()} Portify. All rights reserved.
          </p>
        </div>
      </WidthWrapper>
    </footer>
  );
}
