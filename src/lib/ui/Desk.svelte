<script>
  import Alerts from './Alerts.svelte';
  import { fade } from 'svelte/transition';
</script>

<div id="container" transition:fade={{ delay: 500, duration: 3000 }}>
  <img src="desk.png" alt="bg" />
  <!-- TODO https://www.w3schools.com/html/html_images_imagemap.asp -->
  <Alerts />
</div>

<style>
  #container {
    text-align: center;
  }
  img {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
</style>
