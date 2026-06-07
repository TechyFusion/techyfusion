import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  children: React.ReactNode;
}

export default function Card({ 
  glow = false, 
  className = "", 
  children, 
  ...props 
}: CardProps) {
  return (
    <div
      className={`glass-card rounded-xl p-6 md:p-10 ${glow ? "ai-glow-border" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
