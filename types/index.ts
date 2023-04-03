import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface RawQuotes extends ParsedContent {
  quotes: RawQuote[];
}

export interface RawQuote {
  text: string;
  author: string;
  reference: string;
}

export interface Quote {
  text: string;
  author: string;
  reference: string;
  size: Number;
}
