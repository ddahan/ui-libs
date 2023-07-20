export interface Project {
  name: string;
  repoUrl: string;
}

export interface Component {
  name: string;
}

export interface Dependency {
  name: string;
}

export interface User {
  name: string;
}

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
  free: boolean;
  official: boolean;
  // projects: Project[];
  // creator: User;
  // TODO: other potentiel filters to integrate later
  // components: Component[];
  // dependencies: Dependency[];
  // hasFigmaFiles: boolean;
  // hasTyping: boolean;
  // releaseDate: Date;
  // customizability: string;
  // nbStars: number;
  // nbDownloads: number;
  // activityLevel: number;
  // nuxtOnly: boolean;
}
