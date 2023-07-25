let filterData: { [K in FilterID]: { selected: boolean; autoDisable?: FilterID } } = {
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

  const invertFilter = (FilterID: FilterID) => {
    // 1 - invert the filter selected state
    const oldSelected = filters.value[FilterID].selected;
    filters.value[FilterID].selected = !oldSelected;

    // 2 - some filters can auto-disable already selected filters
    // (eg. selected `Styled` will auto disable `Unstyled`)
    const autoDisable = filters.value[FilterID].autoDisable;
    if (oldSelected === false && !!autoDisable) {
      filters.value[autoDisable].selected = false;
    }
  };

  const selectedFilterIDs = () => <FilterID[]>Object.entries(filters.value)
      // NOTE: <FilterID[]> allows a more accurate type inference
      .filter(([_, value]) => value.selected === true)
      .map(([key, _]) => key);

  const nbSelectedFilters = () => selectedFilterIDs().length;

  const resetFilters = () => {
    // NOTE: <FilterID[]> allows a more accurate type inference
    for (let filterID of <FilterID[]>Object.keys(filterData)) {
      filters.value[filterID].selected = false;
    }
  };

  return {
    filters,
    invertFilter,
    selectedFilterIDs,
    nbSelectedFilters,
    resetFilters,
  };
};
