"use client";
import * as React from "react";
import { Input, InputProps, Button } from "@/components/ui";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          {...rest}
          ref={ref}
          className={className}
        />
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={togglePasswordVisibility}
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <FaEyeSlash className="text-muted-foreground w-4 h-4" />
          ) : (
            <FaEye className="text-muted-foreground w-4 h-4" />
          )}
        </Button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
