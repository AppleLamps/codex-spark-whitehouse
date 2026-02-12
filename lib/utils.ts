export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function resolveHighResolutionImage(source: string, width = 1600, height = 900): string {
  void width;
  void height;

  if (!source || source.startsWith("http://") || source.startsWith("https://")) {
    return source;
  }

  return source;
}

