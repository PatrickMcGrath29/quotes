export function useColumnSettings(numElements: number) {
  if (numElements < 3)
    return 'columns-1'
  else
    return 'columns-md'
}

export function useIsSmallScren() {
  const { width } = useWindowSize()

  return width.value < 1024
}

export function smartEllipsis(text: string, length: number) {
  if (text.length > length) {
    const index = text.substring(0, length - 1)
    text = `${index.substring(0, index.lastIndexOf(' '))}...`
  }
  return text
}

export function dayOfYear() {
  return Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000,
  )
}

export function useNavigateBackToPath(path: string) {
  const router = useRouter()
  const referrer = window.history.state.back

  if (referrer === path) {
    // Use the router back method to take users back to the same place on the page
    router.back()
  }
  else {
    navigateTo(path)
  }
}
