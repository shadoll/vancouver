<script>
  import { onMount } from 'svelte';
  import router from 'svelte-spa-router';
  import { theme, language } from './stores.js';

  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './components/Home.svelte';

  // Routes configuration
  const routes = {
    '/': Home,
    // Add more routes here in the future
  };

  onMount(() => {
    // Initialize theme and language
    theme.init();
    language.init();
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<main class="main-content">
  <svelte:component this={router} {routes} />
</main>

<Footer />

<style>
  .main-content {
    min-height: calc(100vh - 8rem);
  }
</style>
