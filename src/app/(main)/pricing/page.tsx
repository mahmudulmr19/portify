import React from "react";
import { WidthWrapper } from "@/components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import Link from "next/link";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const plans = [
  {
    title: "Free",
    price: 0,
    description: "Essential features you need to get started",
    features: ["Basic website builder", "Limited storage", "Community support"],
    actionLabel: "Try for free!",
  },
  {
    title: "Standard",
    price: 25,
    description: "Perfect for owners of small & medium businesses",
    features: [
      "Advanced website builder",
      "5 projects allowed",
      "Email support",
    ],
    actionLabel: "Get Started",
    popular: true,
  },
  {
    title: "Premium",
    price: "Custom",
    description: "Dedicated support and infrastructure to fit your needs",
    features: [
      "Premium website builder",
      "Unlimited projects",
      "24/7 priority support",
      "Super Exclusive Feature",
    ],
    actionLabel: "Get Started",
    exclusive: true,
  },
];

export default function Page() {
  return (
    <main className="w-full h-full">
      <WidthWrapper className="mt-20 mb-40">
        <div className="mx-auto mb-10 sm:max-w-lg text-center">
          <h1 className="font-bold text-6xl sm:text-7xl tracking-wide">
            Pricing
          </h1>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Optimize your website and get better results. Start for free, no
            credit card required.
          </p>
        </div>
        <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                "w-72 flex flex-col justify-between py-1 mx-auto sm:mx-0",
                plan.popular && "border-primary"
              )}
            >
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <p className="text-3xl font-bold mb-2">
                  {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                </p>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {plan.features.map((feature: string) => (
                  <CheckItem key={feature} text={feature} />
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                >
                  <Link href="/auth/sign-up">{plan.actionLabel}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </WidthWrapper>
    </main>
  );
}

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircledIcon fontSize={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
);
