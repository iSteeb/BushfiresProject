<script>
  import Alerts from './Alerts.svelte';
  import { fade } from 'svelte/transition';
  import { currentState } from '../helpers/stores.js';
  import Laptop from '../components/Laptop.svelte';
  import Radio from '../components/Radio.svelte';
  import Smartphone from '../components/Smartphone.svelte';
  import Landline from '../components/Landline.svelte';

  const scene = [
    { state: 0, component: false },
    { state: 1, component: Laptop },
    { state: 2, component: Radio },
    { state: 3, component: Smartphone },
    { state: 4, component: Landline }
  ];
</script>

<!-- ! https://stackoverflow.com/questions/7844399/responsive-image-map -->
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 2400 2400"
  transition:fade={{ delay: 500, duration: 3000 }}>
  <image width="2400" height="2400" xlink:href="/desk.png" />
  <rect
    x="982"
    y="1618"
    fill="#00f"
    opacity="0.2"
    width="532"
    height="392"
    on:click={() => {
      $currentState.showComponent = 1;
    }} />
  <rect
    x="1914"
    y="934"
    fill="#00f"
    opacity="0.2"
    width="272"
    height="172"
    on:click={() => {
      $currentState.showComponent = 2;
    }} />
  <rect
    x="1800"
    y="1800"
    fill="#00f"
    opacity="0.2"
    width="272"
    height="172"
    on:click={() => {
      $currentState.showComponent = 3;
    }} />
  <rect
    x="600"
    y="1800"
    fill="#00f"
    opacity="0.2"
    width="272"
    height="172"
    on:click={() => {
      $currentState.showComponent = 4;
    }} />
</svg>

<svelte:component this={scene[$currentState.showComponent].component} />
<!-- TODO: Fix the this damn floating problem too! -->
<Alerts />

<style>
  svg {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
