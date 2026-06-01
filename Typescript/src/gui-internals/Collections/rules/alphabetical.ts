/**
 * Creates a sorting rule that sorts items alphabetically based on a specified property.
 * @param key The key of the property to use for sorting.
 * @returns A function that takes an array and returns a new array sorted alphabetically.
 */
export const alphabetical =
  <T extends Record<string, any>>(key: keyof T) =>
  (items: T[]): T[] => {
    return [...items].sort((a, b) =>
      String(a[key] ?? '').localeCompare(String(b[key] ?? '')),
    );
  };