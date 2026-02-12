export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const localImagePrefix = "/images/";

function createSeed(source: string): string {
  return source
    .replace(/^\//, "")
    .replace(/\.[a-zA-Z0-9]+$/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-");
}

export function resolveHighResolutionImage(source: string, width = 1600, height = 900): string {
  if (!source || source.startsWith("http://") || source.startsWith("https://")) {
    return source;
  }

  if (!source.startsWith(localImagePrefix)) {
    return source;
  }

  const seed = createSeed(source);
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}

