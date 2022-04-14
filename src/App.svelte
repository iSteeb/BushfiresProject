<script>
  import { state } from './lib/stores.js';
  import Menu from './lib/ui/Menu.svelte';
  import Intro from './lib/ui/Intro.svelte';
  import Desk from './lib/ui/Desk.svelte';
  import Fin from './lib/ui/Fin.svelte';
  const scene = [
    { state: 0, component: false },
    { state: 1, component: Intro },
    { state: 2, component: Desk },
    { state: 3, component: Fin }
  ];
</script>

<Menu />
<svelte:component this={scene[$state].component} duration={1} />

<style>
</style>
