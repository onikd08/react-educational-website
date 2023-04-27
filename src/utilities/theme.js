export const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  return theme;
};

export const storeThemeInLocalStorage = (theme) => {
  localStorage.setItem("theme", theme);
};

export const lightTheme = "cmyk";
export const darkTheme = "halloween";
