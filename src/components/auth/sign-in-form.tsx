"use client";
import * as React from "react";
import { CardWrapper } from "@/components/auth";
import { SignInSchema, SignInValues } from "@/validators/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Label,
  Input,
  PasswordInput,
  Button,
  FormStatus,
} from "@/components/ui";
import { SignIn } from "@/server/auth";
import { DEFAULT_LOGIN_REDIRECT_URL } from "@/routes";
import { useSearchParams } from "next/navigation";
import { FaSpinner } from "react-icons/fa6";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function SignInForm() {
  const [formStatus, setFormStatus] = React.useState<{
    type: "success" | "error";
    message: string;
  }>({
    type: "success",
    message: "",
  });
  const searchParams = useSearchParams();
  const form = useForm<SignInValues>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignInValues) {
    setFormStatus({
      type: "success",
      message: "",
    });
    const result = await SignIn(values);
    if (result.redirect) {
      window.location.href =
        searchParams.get("next") ?? DEFAULT_LOGIN_REDIRECT_URL;
    }
    if (result.error) {
      setFormStatus({
        type: "error",
        message: result.error,
      });
    } else {
      setFormStatus({
        type: "success",
        message: result.success!,
      });
    }
  }
  return (
    <CardWrapper
      label="Sign In"
      backButtonLabel="New to portify?"
      backButtonHightLightText="Sign Up"
      backButtonHref="/auth/sign-up"
      social
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Label>Email</Label>
                <FormControl>
                  <Input {...field} placeholder="example@email.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Label>Password</Label>
                <FormControl>
                  <PasswordInput {...field} placeholder="*******" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormStatus type={formStatus.type} message={formStatus.message} />
          <Button className="w-full" disabled={form.formState.isSubmitting}>
            Sign In
            {form.formState.isSubmitting ? (
              <FaSpinner className="ml-2 h-4 w-4 animate-spin" />
            ) : (
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
