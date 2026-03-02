import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "accent";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-bg-tertiary text-text-secondary",
    success: "bg-success/15 text-success",
    accent: "bg-accent/15 text-accent",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
