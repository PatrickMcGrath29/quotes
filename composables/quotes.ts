import { Quote, Quotes } from "~/types";

export const useQuotes = async (): Promise<Quote[]> => {
  const { data } = await useAsyncData(() =>
    queryContent<Quotes>("quotes").findOne()
  );

  return data.value?.quotes;
};
