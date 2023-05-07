import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface RawReference extends Reference, ParsedContent {}
export interface RawQuote extends ParsedContent {
  uuid: string;
  text: string;
  reference: string;
  categories: string[];
  link?: string;
}

export interface Reference {
  uuid: string;
  reference_name?: string;
  author_name?: string;
}

export interface Quote {
  uuid: string;
  text: string;
  reference: Reference;
  categories: string[];
  link?: string;
}
