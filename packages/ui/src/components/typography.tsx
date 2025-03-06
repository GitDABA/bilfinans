import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

/**
 * Utility function to merge Tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Typography components that follow the Bilfinans design system
 * Using VWAGTheSans font for brand elements
 */

interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * BrandHeading - For primary headings using VWAGTheSans Bold
 */
export function BrandHeading({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h2
      className={cn("font-vwag font-bold text-2xl tracking-tight", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

/**
 * BrandSubheading - For secondary headings using VWAGTheSans Bold
 */
export function BrandSubheading({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h3
      className={cn("font-vwag font-bold text-xl tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

/**
 * BrandText - For body text using VWAGTheSans Regular
 */
export function BrandText({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn("font-vwag text-base leading-7", className)}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * BrandLead - For prominent body text using VWAGTheSans Light
 */
export function BrandLead({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn(
        "font-vwag font-light text-lg leading-7 text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * BrandEmphasis - For emphasized text using VWAGTheSans Italic
 */
export function BrandEmphasis({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <em
      className={cn("font-vwag italic", className)}
      {...props}
    >
      {children}
    </em>
  );
}

/**
 * BrandCallout - For important callout text using VWAGTheSans Bold
 */
export function BrandCallout({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn(
        "font-vwag font-bold text-base leading-7 text-primary",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * BrandSmall - For small utility text using VWAGTheSans Light
 */
export function BrandSmall({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <small
      className={cn(
        "font-vwag font-light text-sm leading-none",
        className
      )}
      {...props}
    >
      {children}
    </small>
  );
}
