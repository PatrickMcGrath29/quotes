import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Quote {
  text: string;
  author: string;
  reference: string;
  size: Number;
}

export interface Quotes extends ParsedContent {
  quotes: Quote[];
}
