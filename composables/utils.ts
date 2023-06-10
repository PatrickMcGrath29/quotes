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

export const dayOfYear = () => {
  return Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
  );
};
