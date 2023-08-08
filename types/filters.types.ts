type FilterID =
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

type Filter = {
  id: FilterID;
  label: string;
  icon: string;
  help?: string;
};

type FilterMatching = { id: FilterID; to?: string };
