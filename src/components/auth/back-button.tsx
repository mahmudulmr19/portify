import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
  hightLightText?: string;
}
export function BackButton({ label, href, hightLightText }: BackButtonProps) {
  if (hightLightText) {
    return (
      <div className="flex items-center gap-x-2 font-normal text-sm text-muted-foreground">
        {label}
        <Link href={href} className="text-primary">
          {hightLightText}
        </Link>
      </div>
    );
  }

  return (
    <Button asChild variant="link" className="p-0">
      <Link href={href}>{label}</Link>
    </Button>
  );
}
