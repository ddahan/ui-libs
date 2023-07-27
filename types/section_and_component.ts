// component sections
type SectionName = "Elements" | "Forms";

// components
type ComponentName = "Avatar" | "Badge" | "Input";

type Section = { name: SectionName; components: Component[] };

type Component = {
  name: ComponentName;
  aliases?: string[];
  description: string; // see primeVue for example
};
