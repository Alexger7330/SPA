export const getSlugOfHash = (hash) => {
  return hash ? hash.slice(1) : "Home";
};

export const getPageData = (slugOfHash) => {
  const localData = JSON.parse(localStorage.getItem("dataSPA"));
  const data = localData.find(({ slug }) => slug == slugOfHash);
  return data;
};

export const hashChangeEvent = (actionFunnction) => {
  window.addEventListener("hashchange", () => {
    actionFunnction(location.hash);
  });
};
