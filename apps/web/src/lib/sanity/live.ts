import { defineLive } from "next-sanity";

import { client } from "./client";
import { token, getToken } from "./token";

/**
 * Use defineLive to enable automatic revalidation and refreshing of your fetched content
 * Learn more: https://github.com/sanity-io/next-sanity?tab=readme-ov-file#1-configure-definelive
 */

// Create a token-safe configuration that won't fail during build time
const getTokenSafe = () => {
  try {
    return getToken();
  } catch (error) {
    // During build time, return null if token isn't available
    // This is safe because actual token will be required at runtime
    if (process.env.NODE_ENV === 'production') {
      return null;
    }
    throw error;
  }
};

export const { sanityFetch, SanityLive } = defineLive({
  client,
  // Required for showing draft content when the Sanity Presentation Tool is used, or to enable the Vercel Toolbar Edit Mode
  serverToken: token || getTokenSafe(),
  // Required for stand-alone live previews, the token is only shared to the browser if it's a valid Next.js Draft Mode session
  browserToken: token || getTokenSafe(),
});
