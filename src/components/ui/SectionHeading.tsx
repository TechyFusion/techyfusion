import React from "react";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className = "",
  ...props
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-16 max-w-2xl ${alignmentClass} ${className}`} {...props}>
      <h2 className="text-headline-md text-on-surface mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-on-surface-variant">
          {subtitle}
        </p>
      )}
    </div>
  );
}
