import Link from "next/link";

export function Logo({ href }: { href?: string }) {
  return (
    <Link
      href={href ?? "/"}
      className="flex items-center select-none"
      title="Portify"
    >
      <span className="tracking-wide font-bold">Porti</span>
      <span className="font-bold text-primary">fy</span>
    </Link>
  );
}
