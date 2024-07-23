import { map } from "./map.ts";

/**
 * Convert a string from traditional Chinese to simplified Chinese. Non-chinese characters will remain unchanged. Chinese characters that are the same in traditional and simplified Chinese will remain unchanged.
 */
export function ct2cs(input: string): string {
  if (typeof input !== "string") return input;
  return input
    .split("")
    .map((c) => map[c] || c)
    .join("");
}
