import { Quote, RawQuotes } from "~/types";

const computeSize = (text: string): Number => {
  return Math.ceil(text.length / 250);
};

const toQuote = (content: any): Quote => {
  return {
    text: content.text,
    reference: content.reference,
    size: computeSize(content.text),
    author: content.author,
  };
};

export const useQuotes = async (): Promise<Quote[]> => {
  const { data } = await useAsyncData(() =>
    queryContent<RawQuotes>("quotes").findOne()
  );

  return data.value?.quotes.map(toQuote);
};
