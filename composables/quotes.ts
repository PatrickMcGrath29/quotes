import { Quote, RawQuote, RawReference, Reference } from "~/types";

const ALL_CATEGORIES_TAG = "All";

export const useQuotes = async (): Promise<RawQuote[]> => {
  return await queryContent<RawQuote>("/quotes").find();
};

export const useReferences = async (): Promise<Reference[]> => {
  const references = await queryContent<RawReference>("/references").find();

  const toReference = (rawReference: RawReference): Reference => {
    return {
      uuid: rawReference.uuid,
      author_name: rawReference.author_name,
      reference_name: rawReference.reference_name,
      resource_link: rawReference.resource_link,
    };
  };

  return references.map(toReference);
};
