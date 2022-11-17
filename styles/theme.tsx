import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { useDidMount } from "@/hooks/useDidMount";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useNonNullableContext } from "@/hooks/useNonNullableContext";

import GlobalStyle from "./GlobalStyle";

const ColorMode = {
  dark: "dark",
  light: "light",
} as const;

const lightTheme = {
  colors: {
    text: "black",
    background: "white",
    primary: "lightpink",
  },
};

export type ThemeType = typeof lightTheme;

// TODO - wait for new version prettier
// const darkTheme = {
//   colors: {
//     text: 'white',
//     background: 'black',
//     primary: 'deeppink'
//   }
// } satisfies ThemeType

const darkTheme: ThemeType = {
  colors: {
    text: "#DFF6FF",
    background: "#06283D",
    primary: "#DFF6FF",
  },
};

export const themes: Record<
  typeof ColorMode[keyof typeof ColorMode],
  ThemeType
> = {
  light: lightTheme,
  dark: darkTheme,
};
// TODO - wait for new version prettier
// export const themes: Record<typeof ColorMode[keyof typeof ColorMode], ThemeType> = {
//   light: lightTheme,
//   dark: darkTheme,
// } satisfies Record<typeof ColorMode[keyof typeof ColorMode], ThemeType>

export const getInitialColorMode = () => {
  const persistedColorPreference = window.localStorage.getItem("color-mode");
  const hasPersistedPreference =
    typeof persistedColorPreference === "string" &&
    (persistedColorPreference === ColorMode.dark ||
      persistedColorPreference === ColorMode.light);
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? ColorMode.dark : ColorMode.light;
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return ColorMode.light;
};

type ThemeContext = {
  colorMode: typeof ColorMode[keyof typeof ColorMode];
  setColorMode: (val: string) => void;
};
export const ThemeContext = React.createContext<ThemeContext>({
  colorMode: ColorMode.light,
  setColorMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useLocalStorage<keyof typeof ColorMode>(
    "color-mode",
    ColorMode.light
  );

  useDidMount(() => setColorMode(getInitialColorMode()));

  const theme = themes[colorMode];
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      <StyledComponentsThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useNonNullableContext(ThemeContext);
