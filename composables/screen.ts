export const useIsSmallScreen = () => {
  const { width } = useWindowSize();

  return computed(() => {
    return width.value < 1024;
  });
};
