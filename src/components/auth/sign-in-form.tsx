"use client";

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
import { Label, Input, PasswordInput, Button } from "@/components/ui";

export function SignInForm() {
  const form = useForm<SignInValues>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: SignInValues) {
    console.log(values);
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
          <Button className="w-full">Sign In</Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
