type TrueFilterMatching = { match: true; to?: string };
type FalseFilterMatching = { match: false };
type FilterMatching = TrueFilterMatching | FalseFilterMatching;

type Library = {
  name: string;
  subName?: string;
  logo: string;
  logoDark?: string; // only if the logo differs in Dark Mode
  url: string;
  repoOwner?: string;
  repoName?: string;
  package?: string;
  // IDEA: why not only put data which is true in it?
  filterMatchings: { [K in FilterID]: FilterMatching };
  componentMatchings: ComponentName[]; // no need to have a full dict for now. otherwise we could fo like for filter matching, to have more data.

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
