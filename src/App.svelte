<script>
  import { currentState } from './lib/helpers/stores.js';
  import Intro from './lib/ui/Intro.svelte';
  import Desk from './lib/ui/Desk.svelte';
  import EndScreen from './lib/ui/EndScreen.svelte';
  import Overlay from './lib/ui/Overlay.svelte';

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

<Overlay />
<div style="position: absolute">
  appState: {$currentState.appState}<br />
  gameState: {$currentState.gameState}<br />
  overlayComponent: {$currentState.overlayComponent}<br />
</div>

<style>
</style>
