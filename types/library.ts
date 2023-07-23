type Library = {
  name: string;
  subName?: string;
  logo: string;
  logoDark?: string; // only if the logo differs in Dark Mode
  url: string;
  filters: {
    [K in FilterName]: boolean;
  };

  // TODO: other potentiel filters to integrate later

  // publicRoadmap: boolean;
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
