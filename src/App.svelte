<script>
  import { currentState } from './lib/stores.js';
  import Intro from './ui/Intro.svelte';
  import Desk from './ui/Desk.svelte';
  import EndScreen from './ui/EndScreen.svelte';
  import Overlay from './ui/Overlay.svelte';

  const scene = {
    0: false,
    1: Intro,
    2: Desk,
    3: EndScreen
  };
</script>

<svelte:head>
  <link rel="preload" href="/desk.png" as="image" />
  <link rel="preload" href="/introAssets/background.png" as="image" />
  <link rel="preload" href="/introAssets/midground.png" as="image" />
  <link rel="preload" href="/introAssets/foreground.png" as="image" />
  <link rel="preload" href="/introAssets/car.png" as="image" />
  <link rel="preload" href="/introAssets/sign.png" as="image" />
</svelte:head>

<svelte:component this={scene[$currentState.appState]} />
<info>info section</info>
<Overlay />

<style>
  info {
    position: absolute;
  }
</style>
