import React from "react";
import { createContext, useContext} from "react";

export const themeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});


export const ThemeProvider = themeContext.Provider

export function useTheme () {
    return useContext(themeContext);
}