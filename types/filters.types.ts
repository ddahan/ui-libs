// button filters

type ButtonFilterID =
  | "FStyled"
  | "FUnstyled"
  | "FImported"
  | "FPasted"
  | "FTailwind"
  | "FComponents"
  | "FAccessible"
  | "FFigma"
  | "FDarkMode"
  | "FFree"
  | "FRoadmap"
  | "FOfficial";

type ButtonFilter = {
  id: ButtonFilterID;
  label: string;
  icon: string;
  help?: string;
  autoDisable?: ButtonFilterID;
};

type ButtonFilterMatching = { id: ButtonFilterID; to?: string };

// range filters

type RangeFilterID = "FNbStars" | "FNbDownloads" | "FComponentScore";

type RangeFilter = {
  // TODO: use inheritance
  id: RangeFilterID;
  leadingLabel: string;
  trailingLabel: string;
  icon: string;
  rangeMax: number;
  rangeStep: number;
};
