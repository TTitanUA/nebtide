import { useEffect, useState } from 'react';

export type SystemThemeProps = 'dark' | 'light';

export const useSystemTheme = (): SystemThemeProps => {
  const [theme, setTheme] = useState<SystemThemeProps>(() => {
    if (window.matchMedia) {
      const darkThemeMq: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      return darkThemeMq.matches ? 'dark' : 'light';
    }

    return 'light';
  });

  useEffect(() => {
    if (!window.matchMedia) return;

    const darkThemeMq: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (e: MediaQueryListEvent): void => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    darkThemeMq.addEventListener('change', handleThemeChange);

    return () => {
      darkThemeMq.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return theme;
};
