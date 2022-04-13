<script>
  import { state } from './lib/stores.js';
  import Menu from './lib/ui/Menu.svelte';
  import Intro from './lib/ui/Intro.svelte';
  import Desk from './lib/ui/Desk.svelte';
  import Fin from './lib/ui/Fin.svelte';
</script>

<Menu />

{#if $state == 1}
  <Intro duration={1} />
{:else if $state == 2}
  <Desk />
{:else if $state == 3}
  <Fin />
{/if}

<style>
</style>
