# Bilfinans Design System

This document outlines the design system used throughout the Bilfinans project. It provides guidelines and standards to ensure consistent UI/UX across all components and pages.

## Table of Contents

- [Color System](#color-system)
- [Typography](#typography)
- [Component Library](#component-library)
- [Spacing and Layout](#spacing-and-layout)
- [Best Practices](#best-practices)

## Color System

The design system uses CSS variables with HSL values to define colors, making it easy to maintain consistency and support both light and dark modes.

### Primary Colors

| Name | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| Background | `hsl(0 0% 100%)` | `hsl(240 10% 3.9%)` | Main background |
| Foreground | `hsl(240 10% 3.9%)` | `hsl(0 0% 98%)` | Primary text |
| Primary | `hsl(240 5.9% 10%)` | `hsl(0 0% 98%)` | Primary actions, links |
| Secondary | `hsl(240 4.8% 95.9%)` | `hsl(240 3.7% 15.9%)` | Secondary actions |
| Accent | `hsl(240 4.8% 95.9%)` | `hsl(240 3.7% 15.9%)` | UI accents, highlights |
| Muted | `hsl(240 4.8% 95.9%)` | `hsl(240 3.7% 15.9%)` | Subdued elements |

### States and Feedback

| Name | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| Destructive | `hsl(0 84.2% 60.2%)` | `hsl(0 62.8% 30.6%)` | Error states, destructive actions |
| Border | `hsl(240 5.9% 90%)` | `hsl(240 3.7% 15.9%)` | Borders, dividers |
| Input | `hsl(240 5.9% 90%)` | `hsl(240 3.7% 15.9%)` | Form input borders |
| Ring | `hsl(240 10% 3.9%)` | `hsl(240 4.9% 83.9%)` | Focus rings |

### Chart Colors

For data visualization:

| Name | Value |
|------|-------|
| Chart 1 | `hsl(12 76% 61%)` |
| Chart 2 | `hsl(173 58% 39%)` |
| Chart 3 | `hsl(197 37% 24%)` |
| Chart 4 | `hsl(43 74% 66%)` |
| Chart 5 | `hsl(27 87% 67%)` |

## Typography

The system uses a carefully selected font stack:

### Font Families

- **Primary Text**: Geist Sans (variable font)
- **Brand Font**: VWAGTheSans (local font)
- **Monospace**: Geist Mono (variable font)
- **Fallbacks**: System fonts as defined in Tailwind defaults

### VWAGTheSans Usage

VWAGTheSans is our official brand font and should be used for:

- Brand messaging
- Marketing materials
- Prominent UI elements
- Key headlines and call-to-action elements

Available weights and styles:
- Light (300): For subtle, delicate UI elements
- Regular (400): For standard body text
- Italic (400): For emphasis within body text
- Bold (700): For headings and important UI elements

Access via Tailwind class: `font-vwag`

### Type Scale

Follow the built-in Tailwind type scale:

| Name | Size | Usage |
|------|------|-------|
| xs | 0.75rem | Extra small text, fine print |
| sm | 0.875rem | Small text, secondary information |
| base | 1rem | Default body text |
| lg | 1.125rem | Large text, important information |
| xl | 1.25rem | Extra large text, section headers |
| 2xl | 1.5rem | Subheadings |
| 3xl | 1.875rem | Small headings |
| 4xl | 2.25rem | Medium headings |
| 5xl | 3rem | Large headings |
| 6xl | 3.75rem | Extra large headings |
| 7xl | 4.5rem | Display headings |
| 8xl | 6rem | Hero text |
| 9xl | 8rem | Massive display text |

## Component Library

The Bilfinans project uses a shared component library located in `/packages/ui/src/components/`. Always use these components instead of creating new ones.

### Core Components

- **Button**: Standard action buttons with variants
- **Input**: Form inputs
- **Avatar**: User avatars
- **Badge**: Status indicators
- **Accordion**: Collapsible content sections
- **Dropdown Menu**: Multi-selection menus
- **Sheet**: Slide-in panels
- **Navigation Menu**: Site navigation

### Usage Guidelines

1. **Import from the UI package**:
   ```tsx
   import { Button } from "@workspace/ui/src/components/button";
   ```

2. **Maintain consistent props**:
   ```tsx
   <Button variant="default" size="md">Click Me</Button>
   ```

3. **For new components, follow the established pattern**:
   - Use Tailwind classes
   - Follow the naming conventions
   - Include appropriate variants

## Spacing and Layout

The system uses a consistent spacing scale based on Tailwind's default spacing.

### Spacing Scale

- **0**: 0px
- **px**: 1px
- **0.5**: 0.125rem (2px)
- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **5**: 1.25rem (20px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **10**: 2.5rem (40px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **20**: 5rem (80px)
- **24**: 6rem (96px)

### Border Radius

The system uses a base radius of `0.5rem` (8px) with these variants:

- **none**: 0px
- **sm**: 0.125rem (2px)
- **DEFAULT**: 0.25rem (4px)
- **md**: 0.375rem (6px)
- **lg**: 0.5rem (8px)
- **xl**: 0.75rem (12px)
- **2xl**: 1rem (16px)
- **3xl**: 1.5rem (24px)
- **full**: 9999px (fully rounded)

## Best Practices

### Do's

- ✅ Use the shared UI components
- ✅ Follow the color system using CSS variables
- ✅ Maintain consistent spacing
- ✅ Use Tailwind's utility classes
- ✅ Use responsive design with Tailwind's breakpoints
- ✅ Extend the design system when needed following the established patterns

### Don'ts

- ❌ Create duplicate components
- ❌ Use hardcoded color values
- ❌ Use inconsistent spacing
- ❌ Add custom CSS when Tailwind utilities can be used
- ❌ Override the design system without documentation

### Development Workflow

1. **Check for existing components** before creating new ones
2. **Use design tokens** for all visual properties
3. **Document any extensions** to the design system
4. **Test on multiple screen sizes** to ensure responsive design
5. **Maintain accessibility** by using appropriate ARIA attributes and semantic HTML
