type TrueFilterMatching = { match: true; to?: string };
type FalseFilterMatching = { match: false };
type FilterMatching = TrueFilterMatching | FalseFilterMatching;

type Library = {
  name: string;
  subName?: string;
  logo: string;
  logoDark?: string; // only if the logo differs in Dark Mode
  url: string;
  repoUrl?: string;
  nbStars?: number;
  nbDownloads?: number;
  registryUrl?: string;
  filterMatchings: { [K in FilterID]: FilterMatching };

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
