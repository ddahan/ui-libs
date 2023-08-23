// button filters

type ButtonFilterID =
  | "FStyled"
  | "FUnstyled"
  | "FImported"
  | "FPasted"
  | "FTailwind"
  | "FComponents"
  | "FCSS"
  | "FAccessible"
  | "FFigma"
  | "FDarkMode"
  | "FFree"
  | "FRoadmap"
  | "FOfficial"
  | "FRTLSupport"
  | "FTyped"
  | "FBuiltinThemes"
  | "FThemeGenerator"
  | "FSemanticColors"
  | "FVue"
  | "FNuxt";

type ButtonFilter = {
  id: ButtonFilterID;
  index: number; // used to keep a consistent order in badge
  label: string;
  icon: string;
  help: string;
  autoDisable?: ButtonFilterID;
};

type ButtonFilterMatching = { id: ButtonFilterID; to?: string };

// range filters

type RangeFilterID = "FNbStars" | "FNbDownloads" | "FNbComponents";

type RangeFilter = {
  id: RangeFilterID;
  leadingLabel: string;
  trailingLabel: string;
  icon: string;
  help: string;
  rangeMax: number;
  rangeStep: number;
};
