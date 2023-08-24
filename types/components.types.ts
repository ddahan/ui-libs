import { sections } from "@/data/sections";

/* Types are defined entirely from the data */
export type Component = (typeof sections)[0]["components"][0];
export type ComponentName = Component["name"];
export type Section = (typeof sections)[0];
export type SectionName = Section["name"];

// TODO: try to be less data -> type (only for names!)

// type Section = {
//   name: (typeof sections)[0]["name"];
//   icon: string;
//   components: Component[];
// };

// type Component = {
//   name: ComponentName;
//   aliases?: string[];
//   help: string;
// };
