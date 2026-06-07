import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-none font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-black hover:bg-[#00c966]",
    secondary: "border border-border-subtle bg-transparent hover:border-primary text-white",
    ghost: "bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container",
  };

  const sizes = {
    sm: "px-4 py-2 text-body-sm",
    md: "px-6 py-3 text-body-md",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
