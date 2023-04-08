import { Quote, Quotes } from "~/types";

export const useQuotes = async (): Promise<Quote[]> => {
  const { data } = await useAsyncData(() =>
    queryContent<Quotes>("quotes").findOne()
  );

  return data.value?.quotes;
};

export const useColumnSettings = (numQuotes: number) => {
  if (numQuotes < 3) {
    return "columns-1";
  } else if (numQuotes < 5) {
    return "columns-md";
  } else return "columns-sm";
};
