import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Reference extends ParsedContent {
  uuid: string;
  referenceName: string;
  authorName: string;
}

export interface RawQuote extends ParsedContent {
  uuid: string;
  text: string;
  reference: string;
  categories: string[];
}

export interface Quote {
  uuid: string;
  text: string;
  reference: Reference;
  categories: string[];
}
