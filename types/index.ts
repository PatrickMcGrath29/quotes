import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Quotes extends ParsedContent {
  quotes: Quote[];
}

export interface Quote {
  text: string;
  author: string;
  reference: string;
  categories: string[];
}
