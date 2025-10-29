export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export const capitalizeAllWords = (s: string) =>
  s
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
