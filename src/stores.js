import { writable } from 'svelte/store';

const browser = typeof window !== 'undefined';

// Theme store with three modes: system, light, dark
function createThemeStore() {
  const { subscribe, set, update } = writable('system');

  function applyTheme(mode) {
    if (!browser) return;

    let actualTheme;
    if (mode === 'system') {
      actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      actualTheme = mode;
    }
    document.documentElement.setAttribute('data-theme', actualTheme);
  }

  return {
    subscribe,
    set: (theme) => {
      if (browser) {
        localStorage.setItem('theme', theme);
        applyTheme(theme);
      }
      set(theme);
    },
    init: () => {
      if (browser) {
        const saved = localStorage.getItem('theme') || 'system';
        applyTheme(saved);
        set(saved);

        // Listen for system theme changes when in system mode
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', () => {
          const currentTheme = localStorage.getItem('theme') || 'system';
          if (currentTheme === 'system') {
            applyTheme('system');
          }
        });
      }
    },
    cycle: () => {
      update(current => {
        const modes = ['system', 'light', 'dark'];
        const currentIndex = modes.indexOf(current);
        const nextMode = modes[(currentIndex + 1) % modes.length];

        if (browser) {
          localStorage.setItem('theme', nextMode);
          applyTheme(nextMode);
        }

        return nextMode;
      });
    }
  };
}

// Language store
function createLanguageStore() {
  const { subscribe, set, update } = writable('en');

  return {
    subscribe,
    set: (lang) => {
      if (browser) {
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
      }
      set(lang);
    },
    init: () => {
      if (browser) {
        const saved = localStorage.getItem('language');
        const browserLang = navigator.language.split('-')[0];
        const supportedLangs = ['en', 'uk', 'ru'];
        const lang = saved || (supportedLangs.includes(browserLang) ? browserLang : 'en');
        document.documentElement.setAttribute('lang', lang);
        set(lang);
      }
    }
  };
}

export const theme = createThemeStore();
export const language = createLanguageStore();
