<script>
  import Alerts from './Alerts.svelte';
  import { fade } from 'svelte/transition';
</script>

<div id="container" transition:fade={{ delay: 1000, duration: 1000 }}>
  <img src="public/background.png" alt="bg" />
  <Alerts />
</div>

<style>
  img {
    width: 100vw;
    height: 100vh;
  }
</style>
