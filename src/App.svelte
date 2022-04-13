<script>
  import Menu from './lib/ui/Menu.svelte';
  import { state } from './lib/stores.js';
  import Intro from './lib/ui/Intro.svelte';
  import Desk from './lib/ui/Desk.svelte';
  import { fade } from 'svelte/transition';
</script>

<div id="menu"><Menu /></div>
{#if $state == 1}
  <div transition:fade={{ delay: 1000, duration: 1000 }}>
    <Intro duration={1} />
  </div>
{:else if $state == 2}
  <div transition:fade={{ delay: 1000, duration: 1000 }}><Desk /></div>
  <!-- {:else if $state == 3}
  <Fin /> -->
{/if}

<style>
  #menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
</style>
