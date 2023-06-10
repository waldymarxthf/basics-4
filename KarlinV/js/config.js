export const qs = (element) => {
  return document.querySelector(element);
};

export const createEl = (element) => {
  return document.createElement(element);
};

export const el = {
  container: qs("body"),
};
