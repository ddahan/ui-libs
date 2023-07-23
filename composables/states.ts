type FilterStore = {
  [K in ComponentName]: { selected: boolean; autoDisable?: ComponentName };
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

  const invertFilter = (componentName: ComponentName) => {
    const oldSelected = filterData.value[componentName].selected;
    filterData.value[componentName].selected = !oldSelected;

    // Some filters can auto-disable already selected filters
    const autoDisable = filterData.value[componentName].autoDisable;
    if (oldSelected == false && !!autoDisable) {
      filterData.value[autoDisable].selected = false;
    }
  };

  // TODO: handle type here
  const selectedFilters = () => {
    return Object.entries(filterData.value).filter((x) => x[1].selected == true);
  };

  const nbSelectedFilters = (): number => {
    return selectedFilters().length;
  };

  const resetFilters = () => {
    for (let componentName in filters) {
      filterData.value[<ComponentName>componentName].selected = false;
    }
  };

  return {
    filterData,
    selectedFilters,
    nbSelectedFilters,
    invertFilter,
    resetFilters,
  };
};
