<script>
  import { currentState } from './lib/stores.js';
  import Menu from './lib/ui/Menu.svelte';
  import Intro from './lib/ui/Intro.svelte';
  import Desk from './lib/ui/Desk.svelte';
  import EndScreen from './lib/ui/EndScreen.svelte';
  const scene = [
    { state: 0, component: false },
    { state: 1, component: Intro },
    { state: 2, component: Desk },
    { state: 3, component: EndScreen }
  ];
</script>

<svelte:head>
  <link rel="preload" href="background.png" as="image" />
  <link rel="preload" href="animation.mp4" as="video" type="video/mp4" />
</svelte:head>

<Menu />
<svelte:component this={scene[$currentState.appState].component} duration={3} />

<style>
</style>
