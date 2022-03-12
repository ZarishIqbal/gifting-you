export const debounce = (f, wait) => {
  let timeout;

  return (...args) => {
    //@ts-ignore
    const fncall = () => f.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(fncall, wait);
  };
};
