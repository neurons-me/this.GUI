// Define types for complements used in verb actions
// within the Me component.
// Each complement can be direct or indirect,
// targeting specific objects or entities.
export type Complement = {
  type: "direct" | "indirect";
  target: string | string[];
  description?: string;
};

export interface Complements {
  direct?: Complement[];
  indirect?: Complement[];
}

export function applyComplements(
  verb: string,
  complements: Complements
) {
  return {
    verb,
    action: {
      direct: complements.direct?.map(c => c.target) ?? [],
      indirect: complements.indirect?.map(c => c.target) ?? [],
    },
  };
}