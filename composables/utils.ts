export const useColumnSettings = (numElements: number) => {
  if (numElements < 3) {
    return "columns-1";
  } else {
    return "columns-md";
  }
};
