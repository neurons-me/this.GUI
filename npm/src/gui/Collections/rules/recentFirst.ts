/**
 * Creates a sorting rule that orders items based on their appearance in a history array.
 * Items found in the history are prioritized and sorted by their index in the history (most recent first).
 * @param history An array of IDs representing the order of recent items.
 * @param idKey The key of the property that holds the item's unique identifier.
 * @returns A function that takes an array and returns a new array sorted by history.
 */
export const recentFirst =
  <T extends Record<string, any>>(history: string[], idKey: keyof T = 'themeId') =>
  (items: T[]): T[] => {
    if (!history || history.length === 0) return items;

    const rank = new Map(history.map((id, i) => [id, i]));

    return [...items].sort((a, b) => {
      const aRank = rank.get(a[idKey]) ?? Number.MAX_SAFE_INTEGER;
      const bRank = rank.get(b[idKey]) ?? Number.MAX_SAFE_INTEGER;
      return aRank - bRank;
    });
  };