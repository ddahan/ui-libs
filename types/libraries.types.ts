import { ButtonFilterMatching } from "@/types/filters.types";
import { ComponentName } from "@/types/components.types";

export type Library = {
  name: string;
  subName?: string;
  logo: string;
  logoDark?: string; // only if the logo differs in Dark Mode
  url: string;
  repoOwner?: string;
  repoName?: string;
  package?: string;
  filterMatchings: ButtonFilterMatching[];
  componentMatchings: ComponentName[];
  nbStars?: number; // filled later
  nbDownloads?: number; // filled later
};
