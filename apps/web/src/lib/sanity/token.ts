import "server-only";

// Make the token available but don't throw during build time
export const token = process.env.SANITY_API_READ_TOKEN;

// Only verify token when actually performing operations that need it
export function getToken() {
  if (!token) {
    throw new Error("Missing SANITY_API_READ_TOKEN. Please ensure it's set in environment variables.");
  }
  return token;
}
