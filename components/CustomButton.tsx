import { cn } from "cn";
import React from "react";
import { Button } from "./ui/button";

const CustomButton = ({
  disabled,
  isRounded,
  children,
}: {
  disabled?: boolean;
  isRounded?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Button
      className={cn(
        "text-sm",
        disabled ? "bg-gray-300" : "bg-blue-500",
        isRounded && "rounded-full",
      )}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
