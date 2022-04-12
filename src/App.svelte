<script>
  import Menu from './lib/Menu.svelte';
  import Desk from './lib/Desk.svelte';
  import { initialised } from './lib/stores.js';

  let initialisedValue;
  initialised.subscribe((value) => {
    initialisedValue = value;
  });
</script>

<div id="menu"><Menu /></div>

{#if initialisedValue}
  <Desk />
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
