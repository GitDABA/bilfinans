/**
 * ESLint configuration to enforce design system best practices
 * This file provides rules to help maintain design system consistency
 */

/** @type {import("eslint").Linter.Config} */
export const designSystemRules = {
  plugins: ["react"],
  rules: {
    // Enforce design system best practices
    "react/forbid-dom-props": [
      "warn",
      {
        forbid: [
          {
            propName: "style",
            message:
              "Avoid inline styles. Use Tailwind classes that follow the design system.",
          },
          {
            propName: "className",
            // This regex looks for hardcoded color values in className strings
            allowedFor: ["^((?!bg-\\[#|text-\\[#|border-\\[#|color:\\s*#).)*$"],
            message:
              "Avoid hardcoded color values in className. Use design system color tokens.",
          },
        ],
      },
    ],
    
    // Encourage using the design system's Button component
    "react/forbid-elements": [
      "warn",
      {
        forbid: [
          {
            element: "button",
            message:
              "Use the Button component from the UI package instead of raw HTML button.",
          },
          {
            element: "input",
            message:
              "Use the Input component from the UI package instead of raw HTML input.",
          },
        ],
      },
    ],
    
    // Check for color literals in JS/TS files
    "no-restricted-syntax": [
      "warn",
      {
        selector: "Literal[value=/^#[0-9a-fA-F]{3,8}$/]",
        message: "Avoid hardcoded color values. Use design system color tokens.",
      },
      {
        selector: "Literal[value=/font-family:/]",
        message: "Avoid hardcoded font-family values. Use the design system font tokens via Tailwind classes.",
      },
    ],
    
    // Enforce proper font usage
    "react/forbid-component-props": [
      "warn",
      {
        forbid: [
          {
            propName: "className",
            // This regex looks for hardcoded font-family values
            allowedFor: ["^((?!font-family:|font:\s*).)*$"],
            message: "Avoid hardcoded font values in className. Use design system font classes (font-geist, font-vwag, or font-mono).",
          },
        ],
      },
    ],
  },
};

/** @type {import("eslint").Linter.Config} */
export const config = {
  rules: designSystemRules.rules,
  plugins: designSystemRules.plugins,
};

export default config;
