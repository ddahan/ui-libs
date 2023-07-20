export interface Library {
  name: string;
  logo: string;
  logoDark?: string; // only if the logo differs in Dark Mode
  url: string;
  styling: "STYLED" | "UNSTYLED" | "BOTH";
  usage: "IMPORT" | "PASTE";
  tailwindCSSBased: boolean;
  darkModeSupport: boolean;
  accessible: boolean;
  figma: boolean;
  free: boolean;
  official: boolean;
  // projects: Project[];
  // creator: User;
  // TODO: other potentiel filters to integrate later
  // components: Component[];
  // dependencies: Dependency[];
  // hasTyping: boolean;
  // releaseDate: Date;
  // customizability: string;
  // nbStars: number;
  // nbDownloads: number;
  // activityLevel: number;
  // nuxtOnly: boolean;
}
