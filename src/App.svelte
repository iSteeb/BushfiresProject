<script>
  import { currentState } from './lib/stores.js';
  import Intro from './ui/Intro.svelte';
  import Desk from './ui/Desk.svelte';
  import EndScreen from './ui/EndScreen.svelte';
  import Overlay from './ui/Overlay.svelte';
  import { fade } from 'svelte/transition';

  const scene = {
    0: false,
    1: Intro,
    2: Desk,
    3: EndScreen
  };

  const assets = [
    '/desk.png',
    '/introAssets/background.png',
    '/introAssets/midground.png',
    '/introAssets/foreground.png',
    '/introAssets/car.png',
    '/introAssets/sign.png'
  ];
</script>

<svelte:head>
  {#each assets as href}
    <link rel="preload" {href} as="image" />
  {/each}
</svelte:head>
<container transition:fade={{ duration: 500 }}>
  <svelte:component this={scene[$currentState.appState]} />
  {#if $currentState.appState == 0}
    <info>info section</info>
  {/if}
  <Overlay />
</container>

<style>
  info {
    position: absolute;
  }
</style>
