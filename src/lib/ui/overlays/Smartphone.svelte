<script>
  import { currentState } from '../../helpers/stores.js';
  import SocialMediaApp from './applications/SocialMediaApp.svelte';
</script>

<container>
  <viewport>
    <SocialMediaApp />
  </viewport>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1048 1816">
    <image width="1048" height="1816" xlink:href="/smartphone.png" />
  </svg>
</container>

<style>
  viewport {
    position: absolute;
    margin-top: 10%;
    margin-left: 3%;
    padding: 1%;
    height: 86.5%;
    width: 91.5%;
  }
  container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (orientation: landscape) {
    svg {
      height: 70vh;
      width: auto;
    }
  }

  @media (orientation: portrait) {
    svg {
      width: 80vw;
      height: auto;
    }
  }
</style>
