/**
 * A type for a function that transforms a collection of items.
 * It takes an array of items and returns a new array of the same type.
 */
export type CollectionRule<T> = (items: T[]) => T[];

/**
 * Applies a series of transformation rules to a collection of items.
 * Each rule is a function that takes the collection and returns a new, transformed collection.
 */
export function applyCollectionRules<T>(items: T[], rules: CollectionRule<T>[]): T[] {
  // Sequentially apply each rule to the items, starting with the original collection.
  return rules.reduce((currentItems, rule) => rule(currentItems), items);
}