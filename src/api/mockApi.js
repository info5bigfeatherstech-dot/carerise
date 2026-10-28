export const delay = (duration = 320) =>
  new Promise((resolve) => window.setTimeout(resolve, duration));
