"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";

export function Social() {
  function handleClick(provider: "google" | "github") {
    signIn(provider);
  }
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        size="lg"
        variant="outline"
        className="w-full"
        onClick={() => handleClick("google")}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-full"
        onClick={() => handleClick("github")}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
}
