"use client";
import * as React from "react";
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
import {
  Label,
  Input,
  PasswordInput,
  Button,
  FormStatus,
} from "@/components/ui";
import { FaSpinner } from "react-icons/fa6";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import axios from "axios";

export function SignUpForm() {
  const [formStatus, setFormStatus] = React.useState<{
    type: "success" | "error";
    message: string;
  }>({
    type: "success",
    message: "",
  });

  const form = useForm<SignUpValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignUpValues) {
    setFormStatus({
      type: "success",
      message: "",
    });
    try {
      const { data } = await axios.post("/api/auth/sign-up", values);
      setFormStatus({
        type: "success",
        message: data.message,
      });
    } catch (error: any) {
      setFormStatus({
        type: "error",
        message: error.response.data.message,
      });
    }
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
          <FormStatus type={formStatus.type} message={formStatus.message} />
          <Button className="w-full" disabled={form.formState.isSubmitting}>
            Sign Up
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
