import { Quote, RawQuote, Reference } from "~/types";

export const useQuotes = async (): Promise<Quote[]> => {
  const quotes = await queryContent<RawQuote>("quotes").find();
  const references = await queryContent<Reference>("reference").find();

  const referencesById: Map<string, Reference> = new Map(
    references.map((reference: Reference) => [reference.uuid, reference])
  );

  return quotes.map((quote: RawQuote): Quote => {
    return {
      ...quote,
      reference: referencesById.get(quote.reference) as Reference,
    };
  });
};
