export const require_ = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
};