<script>
  import { theme, language } from '../stores.js';
  import { t } from '../translations.js';
  import { Sun, Moon, Globe, Monitor } from 'lucide-svelte';

  let showLanguageMenu = false;

  function cycleTheme() {
    theme.cycle();
  }

  function setLanguage(lang) {
    language.set(lang);
    showLanguageMenu = false;
  }

  function toggleLanguageMenu() {
    showLanguageMenu = !showLanguageMenu;
  }

  function getThemeIcon(currentTheme) {
    switch (currentTheme) {
      case 'light':
        return Sun;
      case 'dark':
        return Moon;
      case 'system':
      default:
        return Monitor;
    }
  }

  function getThemeLabel(currentTheme) {
    switch (currentTheme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
      default:
        return 'System';
    }
  }
</script>

<header class="header">
  <div class="container">
    <div class="header-content">
      <div class="logo">
        <h1>{t('header_title', $language)}</h1>
      </div>

      <div class="header-controls">
        <!-- Language Switcher -->
        <div class="language-switcher" class:active={showLanguageMenu}>
          <button
            class="control-btn language-btn"
            on:click={toggleLanguageMenu}
            aria-label="Change language"
          >
            <Globe size={20} />
            <span class="current-lang">{$language.toUpperCase()}</span>
          </button>

          {#if showLanguageMenu}
            <div class="language-menu">
              <button on:click={() => setLanguage('en')} class:active={$language === 'en'}>
                English
              </button>
              <button on:click={() => setLanguage('uk')} class:active={$language === 'uk'}>
                Українська
              </button>
            </div>
          {/if}
        </div>

        <!-- Theme Switcher -->
        <button
          class="control-btn theme-btn"
          on:click={cycleTheme}
          aria-label="Change theme mode"
          title="Current: {getThemeLabel($theme)}"
        >
          <svelte:component this={getThemeIcon($theme)} size={20} />
          <span class="theme-label">{getThemeLabel($theme)}</span>
        </button>
      </div>
    </div>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--bg-color);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    transition: all 0.3s ease;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  .logo h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }

  .header-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .control-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.875rem;
  }

  .control-btn:hover {
    background: var(--bg-hover);
    transform: translateY(-1px);
  }

  .language-switcher {
    position: relative;
  }

  .language-btn {
    min-width: 4rem;
  }

  .theme-btn {
    min-width: 5rem;
  }

  .current-lang {
    font-weight: 500;
    font-size: 0.75rem;
  }

  .theme-label {
    font-weight: 500;
    font-size: 0.75rem;
  }

  .language-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    background: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: slideDown 0.2s ease;
    min-width: 120px;
  }

  .language-menu button {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    background: none;
    border: none;
    color: var(--text-color);
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-size: 0.875rem;
  }

  .language-menu button:hover {
    background: var(--bg-hover);
  }

  .language-menu button.active {
    background: var(--primary-color);
    color: white;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }

    .logo h1 {
      font-size: 1.25rem;
    }

    .current-lang,
    .theme-label {
      display: none;
    }

    .language-btn,
    .theme-btn {
      min-width: auto;
    }
  }
</style>
