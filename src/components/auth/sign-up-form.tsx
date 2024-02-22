"use client";

import { CardWrapper } from "@/components/auth";
import { SignUpSchema, SignUpValues } from "@/validators/auth";
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

export function SignUpForm() {
  const form = useForm<SignUpValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: SignUpValues) {
    console.log(values);
  }
  return (
    <CardWrapper
      label="Sign Up"
      backButtonLabel="Already have an account?"
      backButtonHightLightText="Sign In"
      backButtonHref="/auth/sign-in"
      social
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Label>Name</Label>
                <FormControl>
                  <Input {...field} placeholder="John Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Button className="w-full">Sign Up</Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
