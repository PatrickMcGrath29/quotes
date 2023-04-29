export const useColumnSettings = (numElements: number) => {
  if (numElements < 3) {
    return "columns-1";
  } else {
    return "columns-md";
  }
};

export const useIsSmallScren = () => {
  const { width } = useWindowSize();

  return width.value < 1024;
};
