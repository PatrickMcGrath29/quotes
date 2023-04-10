export const useColumnSettings = (numElements: number) => {
  if (numElements < 3) {
    return "columns-1";
  } else if (numElements < 5) {
    return "columns-md";
  } else return "columns-sm";
};
