<script>
  import { fade } from 'svelte/transition';
  import { currentState } from '../../lib/stores.js';
</script>

<info class="popup" transition:fade={{ duration: 500 }}>
  {#if $currentState.appState == 0}
    <h1>Info</h1>
    <p>start screen</p>
  {:else if $currentState.appState == 1}
    <h1>Scenario</h1>
    <p>intro screens</p>
  {:else if $currentState.appState == 2}
    <h1>Help</h1>
    <p>menu screens</p>
  {/if}
</info>

<!-- TODO: prompt the user to think of the route in intro info also inform users that stuff may break (phones etc) as the fire gets worse, but may also come back online as it gets better -->
