// POC: only 2 section and 3 components to test
type SectionName = "Elements" | "Forms";

type ComponentName = "Avatar" | "Badge" | "Input";

type Section = { name: SectionName; components: Component[] };

type Component = {
  name: ComponentName;
  aliases?: string[];
  description: string; // see primeVue for example
  factor: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};
