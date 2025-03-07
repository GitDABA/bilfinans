import { defineEnableDraftMode } from "next-sanity/draft-mode";

import { client } from "@/lib/sanity/client";
import { token, getToken } from "@/lib/sanity/token";

// Use a safe approach for token handling during build time
const getSafeToken = () => {
  try {
    // Only attempt to retrieve token at runtime
    return process.env.NODE_ENV === 'production' ? token : getToken();
  } catch (error) {
    // During build, use token directly (which might be undefined, but won't throw)
    return token;
  }
};

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: getSafeToken() }),
});
