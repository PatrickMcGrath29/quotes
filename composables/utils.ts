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

export const daysSinceEpoch = () => {
  return Math.ceil(new Date().getTime() / 86400000);
};
