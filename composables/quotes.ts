import { RawQuote, RawReference, Reference } from "~/types";

export const useQuotes = async (): Promise<RawQuote[]> => {
  const quotes = await queryContent<RawQuote>("/quotes")
    .sort({ uuid: 1 })
    .find();

  return quotes.map((quote) => {
    return {
      ...quote,
      referenceId: quote.referenceId?.toLowerCase(),
      uuid: quote.uuid.toLowerCase(),
    };
  });
};

export const useReferences = async (): Promise<Reference[]> => {
  const references = await queryContent<RawReference>("/references")
    .sort({ uuid: 1 })
    .find();

  const toReference = (rawReference: RawReference): Reference => {
    return {
      uuid: rawReference.uuid.toLowerCase(),
      authorName: rawReference.authorName,
      referenceName: rawReference.referenceName,
      link: rawReference.link,
    };
  };

  return references.map(toReference);
};
