import { Quote, Quotes } from "~/types";

const toQuote = (content: any): Quote => {
  return {
    text: content.text,
    reference: content.reference,
    author: content.author,
    categories: content.categories,
  };
};

export const useQuotes = async (): Promise<Quote[]> => {
  const { data } = await useAsyncData(() =>
    queryContent<Quotes>("quotes").findOne()
  );

  return data.value?.quotes;
};
