type FilterMatching = { id: FilterID; to?: string };

type Library = {
  name: string;
  subName?: string;
  logo: string;
  logoDark?: string; // only if the logo differs in Dark Mode
  help?: string;
  url: string;
  repoOwner?: string;
  repoName?: string;
  package?: string;
  filterMatchings: FilterMatching[];
  componentMatchings: ComponentName[];

  // TODO: other potentiel filters to integrate later
  // projects: Project[];
  // creator: User;
  // components: Component[];
  // dependencies: Dependency[];
  // hasTyping: boolean;
  // releaseDate: Date;
  // customizability: string;
  // nbStars: number;
  // nbDownloads: number;
  // activityLevel: number;
  // nuxtOnly: boolean;
};
