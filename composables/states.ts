type FilterStore = {
  [K in ComponentName]: { selected: boolean; invert?: ComponentName };
};

let filters: FilterStore = {
  FStyled: { selected: false, invert: "FUnstyled" },
  FUnstyled: { selected: false, invert: "FStyled" },
  FImported: { selected: false, invert: "FPasted" },
  FPasted: { selected: false, invert: "FImported" },
  FTailwind: { selected: false },
  FComponents: { selected: false },
  FAccessible: { selected: true },
  FFigma: { selected: true },
  FDarkMode: { selected: false },
  FFree: { selected: false },
  FOfficial: { selected: false },
};

export const useFilterStore = () => {
  const filterData = useState("filterStore", () => {
    return filters;
  });

  const invertFilter = (componentName: ComponentName) => {
    filterData.value[componentName].selected = !filterData.value[componentName].selected;
  };

  const nbSelectedFilters = (): number => {
    return Object.values(filterData.value).filter((x) => x.selected == true).length;
  };

  const resetFilters = () => {
    for (let componentName in filters) {
      filterData.value[<ComponentName>componentName].selected = false;
    }
  };

  return {
    filterData,
    nbSelectedFilters,
    invertFilter,
    resetFilters,
  };
};
