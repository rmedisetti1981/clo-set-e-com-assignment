export const getUrlParams = () => {
  const params = new URLSearchParams(window.location.search);
  const obj = {};
  for (const [key, value] of params.entries()) {
    obj[key] = value === "true" ? true : value === "false" ? false : value;
  }
  return obj;
};

export const setUrlParams = (params) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "" && value !== false) {
      searchParams.set(key, value);
    }
  });

  const queryString = searchParams.toString();

  const newUrl = queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname;
  window.history.replaceState({}, "", newUrl);
};
