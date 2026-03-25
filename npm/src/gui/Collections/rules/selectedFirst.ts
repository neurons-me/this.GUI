/**
 * Creates a sorting rule that moves a specific item to the beginning of the array.
 * @param selectedId The ID of the item to move to the front.
 * @param idKey The key of the property that holds the item's unique identifier.
 * @returns A function that takes an array and returns a new array with the selected item first.
 */
export const selectedFirst =
  <T extends Record<string, any>>(selectedId: string | undefined, idKey: keyof T = 'themeId') =>
  (items: T[]): T[] => {
    if (!selectedId) return items;
    return [...items].sort((a, b) => {
      if (a[idKey] === selectedId) return -1;
      if (b[idKey] === selectedId) return 1;
      return 0;
    });
  };