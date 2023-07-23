let filterData: { [K in FilterName]: { selected: boolean; autoDisable?: FilterName } } = {
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
  FRoadmap: { selected: false },
};

export const useFilterStore = () => {
  const filters = useState("filterStore", () => filterData);

  const invertFilter = (FilterName: FilterName) => {
    // 1 - invert the filter selected state
    const oldSelected = filters.value[FilterName].selected;
    filters.value[FilterName].selected = !oldSelected;

    // 2 - some filters can auto-disable already selected filters
    // (eg. selected `Styled` will auto disable `Unstyled`)
    const autoDisable = filters.value[FilterName].autoDisable;
    if (oldSelected === false && !!autoDisable) {
      filters.value[autoDisable].selected = false;
    }
  };

  const selectedFilterNames = () => <FilterName[]>Object.entries(filters.value)
      // NOTE: <FilterName[]> allows a more accurate type inference
      .filter(([_, value]) => value.selected === true)
      .map(([key, _]) => key);

  const nbSelectedFilters = () => selectedFilterNames().length;

  const resetFilters = () => {
    // NOTE: <FilterName[]> allows a more accurate type inference
    for (let filterName of <FilterName[]>Object.keys(filterData)) {
      filters.value[filterName].selected = false;
    }
  };

  return {
    filters,
    invertFilter,
    selectedFilterNames,
    nbSelectedFilters,
    resetFilters,
  };
};
