import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "pulse";
  children: React.ReactNode;
}

export default function Badge({ 
  variant = "default", 
  className = "", 
  children, 
  ...props 
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-border-subtle font-mono text-label-caps uppercase tracking-widest ${className}`}
      {...props}
    >
      {variant === "pulse" && (
        <span className="flex h-2 w-2 rounded-full bg-electric-blue animate-pulse shrink-0"></span>
      )}
      <span className="text-primary truncate">{children}</span>
    </span>
  );
}
