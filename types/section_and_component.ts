// component sections
// The as const syntax makes TypeScript treat the array as a read-only tuple, so the type derived from it is a union of the tuple elements rather than just string[].
const sectionNames = ["Elements", "Forms"] as const;
type SectionName = (typeof sectionNames)[number];

// components
const componentNames = ["Avatar", "Badge", "Input"] as const;
const nbComponents = componentNames.length;
type ComponentName = (typeof componentNames)[number];

type Section = { name: SectionName; components: Component[] };

type Component = {
  name: ComponentName;
  aliases?: string[];
  description: string; // see primeVue for example
  factor: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

export default nbComponents; // used for availability score.
