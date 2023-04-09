export const useIsBigScreen = () => {
  const { width } = useWindowSize();

  // Default to false, if the width value hasn't yet loaded
  return computed(() => {
    return isFinite(width.value) && width.value >= 1024;
  });
};
