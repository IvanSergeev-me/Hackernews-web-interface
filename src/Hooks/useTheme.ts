import { useEffect, useState } from "react";
import type { Themes } from "../Config/constants";

const StorageKey = 'features-color-theme';

const getTheme = (): Themes => {
  let theme = localStorage.getItem(StorageKey);

  if (!theme) {
    localStorage.setItem(StorageKey, 'light');
    theme = 'light';
  }

  return theme as Themes;
};

export const useTheme = () =>{
    const [currentTheme, setTheme] = useState<Themes>(getTheme);

    const switchTheme = (theme:Themes) =>{
        setTheme(theme);
        localStorage.setItem(StorageKey, theme);
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);
    return {
        currentTheme,
        switchTheme,
    }
}