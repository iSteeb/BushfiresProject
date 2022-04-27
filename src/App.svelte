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
  <link rel="preload" href="/desk.png" as="image" />
  <link rel="preload" href="/introAssets/background.png" as="image" />
  <link rel="preload" href="/introAssets/midground.png" as="image" />
  <link rel="preload" href="/introAssets/foreground.png" as="image" />
  <link rel="preload" href="/introAssets/car.png" as="image" />
  <link rel="preload" href="/introAssets/sign.png" as="image" />
</svelte:head>

<Menu />
<svelte:component this={scene[$currentState.appState].component} duration={0} />

<style>
</style>
