<script>
  import OutClick from 'svelte-outclick';
  import { currentState } from '../helpers/stores.js';
  import Laptop from './overlays/Laptop.svelte';
  import Radio from './overlays/Radio.svelte';
  import Smartphone from './overlays/Smartphone.svelte';
  import Landline from './overlays/Landline.svelte';
  import menuInfo from './overlays/menuInfo.svelte';

  const scene = {
    0: false,
    1: Laptop,
    2: Radio,
    3: Smartphone,
    4: Landline,
    99: menuInfo
  };
</script>

<OutClick on:outclick={() => ($currentState.overlayComponent = 0)}>
  <svelte:component this={scene[$currentState.overlayComponent]} />
</OutClick>
