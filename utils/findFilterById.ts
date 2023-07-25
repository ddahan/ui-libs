const findFilterbyId = (id: FilterID): Filter =>
  /* Return a filter from the array of filters, based on the given key */
  <Filter>filters.find((obj) => obj.id === id);

export default findFilterbyId;
