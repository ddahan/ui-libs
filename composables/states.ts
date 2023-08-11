let initialFiltering: { [K in FilterID]: { selected: boolean } } = {
  FStyled: { selected: false },
  FUnstyled: { selected: false },
  FImported: { selected: false },
  FPasted: { selected: false },
  FTailwind: { selected: false },
  FComponents: { selected: false },
  FAccessible: { selected: false },
  FFigma: { selected: false },
  FDarkMode: { selected: false },
  FFree: { selected: false },
  FOfficial: { selected: false },
  FRoadmap: { selected: false },
};

import { filters } from "@/data/filters";

export const useFilterStore = () => {
  const filtering = useState("filterStore", () => initialFiltering);

  const invertFilter = (FilterID: FilterID) => {
    // 1 - invert the filter selected state
    const oldSelected = filtering.value[FilterID].selected;
    filtering.value[FilterID].selected = !oldSelected;

    // 2 - some filters can auto-disable already selected filters
    // (eg. selected `Styled` will auto disable `Unstyled`)
    const autoDisable = findBy("id", FilterID, filters)?.autoDisable;
    if (oldSelected === false && !!autoDisable) {
      filtering.value[autoDisable].selected = false;
    }
  };

  const selectedFilterIDs = () => <FilterID[]>Object.entries(filtering.value)
      // NOTE: <FilterID[]> allows a more accurate type inference
      .filter(([_, value]) => value.selected === true)
      .map(([key, _]) => key);

  const nbSelectedFilters = () => selectedFilterIDs().length;

  const resetFilters = () => {
    // NOTE: <FilterID[]> allows a more accurate type inference
    for (let filterID of <FilterID[]>Object.keys(filtering.value)) {
      filtering.value[filterID].selected = false;
    }
  };

  return {
    filtering,
    invertFilter,
    selectedFilterIDs,
    nbSelectedFilters,
    resetFilters,
  };
};

import { sections } from "@/data/sections";
export const useNbComponentsStore = () => {
  /* Return the number of potential existing components. useful to compute the availability score  */
  let componentCount = sections.reduce((count, section) => {
    return count + section.components.length;
  }, 0);
  return useState("nbComponentsStore", () => componentCount);
};
