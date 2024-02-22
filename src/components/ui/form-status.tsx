import {
  ExclamationTriangleIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";

interface FormStatusProps {
  message?: string;
  type: "error" | "success";
}
export function FormStatus({ message, type }: FormStatusProps) {
  if (!message) return null;
  if (type === "error") {
    return (
      <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
        <ExclamationTriangleIcon className="w-4 h-4" />
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}
