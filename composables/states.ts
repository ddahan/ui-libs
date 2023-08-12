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

let initialRangeFiltering: { [K in RangeFilterID]: { value: number } } = {
  FNbStars: { value: 0 },
  FNbDownloads: { value: 0 },
  FComponentScore: { value: 0 },
};

import { filters } from "@/data/filters";

export const useFilterStore = () => {
  const filtering = useState("filterStore", () => initialFiltering);
  const rangeFiltering = useState("rangeFilterStore", () => initialRangeFiltering);

  // run when a filter button is clicked
  const invertButtonFiltering = (filterID: FilterID) => {
    // 1 - invert the filter selected state
    const oldSelected = filtering.value[filterID].selected;
    filtering.value[filterID].selected = !oldSelected;

    // 2 - some filters can auto-disable already selected filters
    // (eg. selected `Styled` will auto disable `Unstyled`)
    const autoDisable = findBy("id", filterID, filters)?.autoDisable;
    if (oldSelected === false && !!autoDisable) {
      filtering.value[autoDisable].selected = false;
    }
  };

  // run when a range is changed
  const changeRangeFiltering = (rangeFilterID: RangeFilterID, value: number) => {
    rangeFiltering.value[rangeFilterID].value = value;
  };

  const selectedFilterIDs = () => <FilterID[]>Object.entries(filtering.value)
      // NOTE: <FilterID[]> allows a more accurate type inference
      .filter(([_, value]) => value.selected === true)
      .map(([key, _]) => key);

  const selectedRangeFilterIDs = () => <RangeFilterID[]>Object.entries(
      rangeFiltering.value
    )
      .filter(([_, value]) => value.value > 0)
      .map(([key, _]) => key);

  const nbSelectedFilters = () =>
    selectedFilterIDs().length + selectedRangeFilterIDs().length;

  const resetFilters = () => {
    // NOTE: <FilterID[]> allows a more accurate type inference
    for (let filterID of <FilterID[]>Object.keys(filtering.value)) {
      filtering.value[filterID].selected = false;
    }

    for (let rangeFilterID of <RangeFilterID[]>Object.keys(rangeFiltering.value)) {
      rangeFiltering.value[rangeFilterID].value = 0;
    }
  };

  return {
    filtering,
    rangeFiltering,
    invertButtonFiltering,
    changeRangeFiltering,
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
