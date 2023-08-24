import { buttonFilters, rangeFilters } from "@/data/filters";

// button filters

export type ButtonFilterID = (typeof buttonFilters)[number]["id"];

export type ButtonFilter = {
  id: ButtonFilterID;
  index: number; // used to keep a consistent order in badge
  label: string;
  icon: string;
  help: string;
  autoDisable?: ButtonFilterID;
};

export type ButtonFilterMatching = { id: ButtonFilterID; to?: string };

// range filters

export type RangeFilterID = (typeof rangeFilters)[number]["id"];

export type RangeFilter = {
  id: RangeFilterID;
  leadingLabel: string;
  trailingLabel: string;
  icon: string;
  help: string;
  rangeMax: number;
  rangeStep: number;
};
