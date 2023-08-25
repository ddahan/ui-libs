let initialButtonFiltering: { [K in ButtonFilterID]: { selected: boolean } } = {
  FStyled: { selected: false },
  FUnstyled: { selected: false },
  FImported: { selected: false },
  FPasted: { selected: false },
  FTailwind: { selected: false },
  FComponents: { selected: false },
  FCSS: { selected: false },
  FAccessible: { selected: false },
  FFigma: { selected: false },
  FDarkMode: { selected: false },
  FFree: { selected: false },
  FOfficial: { selected: false },
  FRoadmap: { selected: false },
  FRTLSupport: { selected: false },
  FTyped: { selected: false },
  FBuiltinThemes: { selected: false },
  FThemeGenerator: { selected: false },
  FSemanticColors: { selected: false },
  FVue: { selected: false },
  FNuxt: { selected: false },
  FForm: { selected: false },
};

let initialRangeFiltering: { [K in RangeFilterID]: { qty: number } } = {
  FNbStars: { qty: 0 },
  FNbDownloads: { qty: 0 },
  FNbComponents: { qty: 0 },
};

import { ButtonFilterID, RangeFilterID } from "@/types/filters.types";
import { buttonFilters } from "@/data/filters";

export const useFilterStore = () => {
  const buttonFiltering = useState("buttonFilterStore", () => initialButtonFiltering);
  const rangeFiltering = useState("rangeFilterStore", () => initialRangeFiltering);

  // run when a filter button is clicked
  const invertButtonFiltering = (filterID: ButtonFilterID) => {
    // 1 - invert the filter selected state
    const oldSelected = buttonFiltering.value[filterID].selected;
    buttonFiltering.value[filterID].selected = !oldSelected;

    // 2 - some filters can auto-disable already selected filters
    // (eg. selected `Styled` will auto disable `Unstyled`)
    const autoDisable = <ButtonFilterID>(
      findBy("id", filterID, buttonFilters)!.autoDisable
    );
    if (oldSelected === false && !!autoDisable) {
      buttonFiltering.value[autoDisable].selected = false;
    }
  };

  // run when a range is changed
  const changeRangeFiltering = (rangeFilterID: RangeFilterID, qty: number) => {
    rangeFiltering.value[rangeFilterID].qty = qty;
  };

  const touchedButtonFilterIDs = () => <ButtonFilterID[]>Object.entries(
      buttonFiltering.value
    )
      // NOTE: <FilterID[]> allows a more accurate type inference
      .filter(([_, value]) => value.selected === true)
      .map(([key, _]) => key);

  const touchedRangeFilterIDs = () => <RangeFilterID[]>Object.entries(
      rangeFiltering.value
    )
      .filter(([_, value]) => value.qty > 0)
      .map(([key, _]) => key);

  const nbTouchedFilters = () =>
    touchedButtonFilterIDs().length + touchedRangeFilterIDs().length;

  const clearFiltering = () => {
    // NOTE: <ButtonFilterID[]> allows a more accurate type inference
    for (let filterID of <ButtonFilterID[]>Object.keys(buttonFiltering.value)) {
      buttonFiltering.value[filterID].selected = false;
    }

    for (let rangeFilterID of <RangeFilterID[]>Object.keys(rangeFiltering.value)) {
      rangeFiltering.value[rangeFilterID].qty = 0;
    }
  };

  return {
    buttonFiltering,
    rangeFiltering,
    invertButtonFiltering,
    changeRangeFiltering,
    touchedButtonFilterIDs,
    nbTouchedFilters,
    clearFiltering,
  };
};

// ---------------------------------------------------------------------------------------

import { sections } from "@/data/sections";
export const useNbComponentsStore = () => {
  /* Return the number of potential existing components. useful to compute the availability score  */
  let componentCount = sections.reduce((count, section) => {
    return count + section.components.length;
  }, 0);
  return useState("nbComponentsStore", () => componentCount);
};

// ---------------------------------------------------------------------------------------

export const useShowMissingStore = () => {
  /* Show all components, even the missing ones, on a library detail */
  const showMissing = useState("showMissingStore", () => true);

  /* Toggle */
  const invertMissing = () => {
    showMissing.value = !showMissing.value;
  };

  return {
    showMissing,
    invertMissing,
  };
};
