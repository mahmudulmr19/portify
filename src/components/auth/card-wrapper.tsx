import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackButton, Social } from "@/components/auth";

interface CardWrapperProps {
  children?: React.ReactNode;
  label: string;
  social?: boolean;
  backButtonLabel: string;
  backButtonHref: string;
  backButtonHightLightText?: string;
}

export function CardWrapper({
  children,
  label,
  social,
  backButtonLabel,
  backButtonHref,
  backButtonHightLightText,
}: CardWrapperProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{label}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>

      {social && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
          hightLightText={backButtonHightLightText}
        />
      </CardFooter>
    </Card>
  );
}
