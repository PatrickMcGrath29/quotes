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

export const useNavigateBackToPath = (path: string) => {
  const router = useRouter();
  const referrer = window.history.state.back;

  if (referrer == path) {
    // Use the router back method to take users back to the same place on the page
    router.back();
  } else {
    navigateTo(path);
  }
};
