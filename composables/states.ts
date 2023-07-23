type FilterName =
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
  | "FOfficial";

type FilterStore = {
  [K in FilterName]: { selected: boolean; autoDisable?: FilterName };
};

let filters: FilterStore = {
  FStyled: { selected: false, autoDisable: "FUnstyled" },
  FUnstyled: { selected: false, autoDisable: "FStyled" },
  FImported: { selected: false, autoDisable: "FPasted" },
  FPasted: { selected: false, autoDisable: "FImported" },
  FTailwind: { selected: false },
  FComponents: { selected: false },
  FAccessible: { selected: false },
  FFigma: { selected: false },
  FDarkMode: { selected: false },
  FFree: { selected: false },
  FOfficial: { selected: false },
};

export const useFilterStore = () => {
  const filterData = useState("filterStore", () => {
    return filters;
  });

  const invertFilter = (FilterName: FilterName) => {
    const oldSelected = filterData.value[FilterName].selected;
    filterData.value[FilterName].selected = !oldSelected;

    // Some filters can auto-disable already selected filters
    const autoDisable = filterData.value[FilterName].autoDisable;
    if (oldSelected == false && !!autoDisable) {
      filterData.value[autoDisable].selected = false;
    }
  };

  const selectedFilterNames = () => {
    return Object.entries(filterData.value)
      .filter((x) => x[1].selected === true)
      .map(([key, _]) => key);
  };

  const nbSelectedFilters = (): number => {
    return selectedFilterNames().length;
  };

  const resetFilters = () => {
    for (let filterName of <FilterName[]>Object.keys(filters)) {
      filterData.value[<FilterName>filterName].selected = false;
    }
  };

  return {
    filterData,
    selectedFilterNames,
    nbSelectedFilters,
    invertFilter,
    resetFilters,
  };
};
