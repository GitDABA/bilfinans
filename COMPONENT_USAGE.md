# Bilfinans Component Usage Guide

This guide provides detailed instructions on how to use the shared UI components in the Bilfinans project. Following these guidelines ensures consistency across the application.

## Table of Contents

- [General Principles](#general-principles)
- [Core Components](#core-components)
  - [Button](#button)
  - [Input](#input)
  - [Badge](#badge)
  - [Avatar](#avatar)
  - [Dropdown Menu](#dropdown-menu)
  - [Sheet](#sheet)
  - [Navigation Menu](#navigation-menu)
- [Creating New Components](#creating-new-components)
- [Integration with Sanity](#integration-with-sanity)

## General Principles

When working with the Bilfinans component library:

1. **Always import from the UI package**
   ```tsx
   import { Button } from "@workspace/ui/src/components/button";
   ```

2. **Use Tailwind classes from the design system**
   ```tsx
   <div className="bg-background text-foreground">
     Content here
   </div>
   ```

3. **Never use hardcoded colors, spacing, or typography values**
   ```tsx
   // ❌ Wrong
   <div style={{ color: '#ff0000', marginTop: '15px' }}>
   
   // ✅ Right
   <div className="text-destructive mt-4">
   ```

4. **Use variants defined in the components**
   ```tsx
   <Button variant="outline" size="sm">
     Click me
   </Button>
   ```

## Typography Guidelines

### Font Family Usage

The project includes three font families, each with specific use cases:

1. **Geist Sans (`font-geist`)**: Default UI text
   ```tsx
   <p className="font-geist">Default interface text</p>
   ```

2. **VWAGTheSans (`font-vwag`)**: Brand and marketing elements
   ```tsx
   <h1 className="font-vwag text-3xl font-bold">Brand Heading</h1>
   <p className="font-vwag">Brand paragraph text</p>
   ```

3. **Geist Mono (`font-mono`)**: Code snippets and technical data
   ```tsx
   <code className="font-mono bg-muted p-1 rounded">console.log()</code>
   ```

### VWAGTheSans Weight and Style Guide

- **Light (300)**: Subtle UI elements, fine print
  ```tsx
  <p className="font-vwag font-light text-sm text-muted-foreground">Terms and conditions apply</p>
  ```

- **Regular (400)**: Standard body text, descriptions
  ```tsx
  <p className="font-vwag">This is our standard brand text for content sections.</p>
  ```

- **Italic (400)**: Emphasis, quotes, special notes
  ```tsx
  <p className="font-vwag italic">Special offer available for a limited time</p>
  ```

- **Bold (700)**: Headings, important UI elements, call-to-actions
  ```tsx
  <h2 className="font-vwag font-bold text-2xl">Feature Highlight</h2>
  <Button className="font-vwag font-bold">Take Action</Button>
  ```

### Recommended Typography Components

For consistent typography, consider creating dedicated typography components:

```tsx
// In @workspace/ui/src/components/typography.tsx
export function BrandHeading({ children, className, ...props }) {
  return (
    <h2
      className={cn("font-vwag font-bold text-2xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function BrandText({ children, className, ...props }) {
  return (
    <p
      className={cn("font-vwag text-base", className)}
      {...props}
    >
      {children}
    </p>
  );
}
```

## Core Components

### Button

The Button component provides a consistent way to render buttons throughout the application.

```tsx
import { Button } from "@workspace/ui/src/components/button";

// Basic usage
<Button>Click me</Button>

// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With icon
import { PlusIcon } from "lucide-react";
<Button>
  <PlusIcon className="mr-2 h-4 w-4" />
  Add Item
</Button>
```

### Input

```tsx
import { Input } from "@workspace/ui/src/components/input";

// Basic usage
<Input type="text" placeholder="Enter your name" />

// Disabled state
<Input disabled placeholder="Disabled input" />

// With label and description (using additional components)
<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email
  </label>
  <Input id="email" type="email" placeholder="Enter your email" />
  <p className="text-sm text-muted-foreground">
    We'll never share your email with anyone else.
  </p>
</div>
```

### Badge

```tsx
import { Badge } from "@workspace/ui/src/components/badge";

// Variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
```

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@workspace/ui/src/components/avatar";

<Avatar>
  <AvatarImage src="https://example.com/avatar.jpg" alt="User avatar" />
  <AvatarFallback>DB</AvatarFallback>
</Avatar>
```

### Dropdown Menu

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@workspace/ui/src/components/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Sheet

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@workspace/ui/src/components/sheet";

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    {/* Sheet content goes here */}
    <SheetFooter>
      <SheetClose asChild>
        <Button>Save Changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

### Navigation Menu

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@workspace/ui/src/components/navigation-menu";

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="/">Home</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Features</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          <li>
            <NavigationMenuLink href="/features/1">Feature 1</NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink href="/features/2">Feature 2</NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Creating New Components

When creating new components for your project:

1. **Follow the established pattern**
   - Use Tailwind classes
   - Create variants with cva (class-variance-authority)
   - Provide prop types with TypeScript
   
2. **Use composition**
   - Build complex components from simpler ones
   - Keep components focused on a single responsibility

3. **Example structure for a new component**:

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@workspace/ui/src/lib/utils";

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border",
        outline: "border-2 border-primary",
        ghost: "border-transparent shadow-none",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ 
  className, 
  variant, 
  size, 
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, size }), className)}
      {...props}
    />
  );
}
```

## Integration with Sanity

When integrating UI components with Sanity content:

1. **Use typed schemas**
   - Create TypeScript interfaces that match your Sanity schemas
   - Validate incoming data from Sanity

2. **Create dedicated components for Sanity content blocks**
   - Keep presentation logic separate from data fetching
   - Build reusable block components that correspond to your schema types

3. **Example integration pattern**:

```tsx
// Define types that match your Sanity schema
interface HeroBlock {
  _type: 'hero';
  title: string;
  subtitle?: string;
  ctaButton?: {
    text: string;
    url: string;
  };
}

// Create a component that renders a specific block type
function HeroSection({ data }: { data: HeroBlock }) {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground">{data.title}</h1>
        {data.subtitle && (
          <p className="mt-4 text-xl text-muted-foreground">{data.subtitle}</p>
        )}
        {data.ctaButton && (
          <Button className="mt-6" asChild>
            <a href={data.ctaButton.url}>{data.ctaButton.text}</a>
          </Button>
        )}
      </div>
    </section>
  );
}

// Use in your page component
function Page({ blocks }) {
  return (
    <main>
      {blocks.map((block, index) => {
        switch (block._type) {
          case 'hero':
            return <HeroSection key={index} data={block} />;
          // Add cases for other block types
          default:
            return null;
        }
      })}
    </main>
  );
}
```
