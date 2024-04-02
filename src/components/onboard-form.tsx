"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button, Input } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { createOrganization } from "@/server/organization";
import { toast } from "sonner";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Organization name is required" }).trim(),
});

export function OnboardForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });
  async function onSubmit({ name }: z.infer<typeof schema>) {
    const result = await createOrganization(name);
    if (result.error) {
      return form.setError("name", { message: result.error });
    }
    toast.success("Organization created successfully");
  }
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Create a Organization</CardTitle>
        <CardDescription className="text-center">
          Enter your organization name to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your organization name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Create Organization
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
