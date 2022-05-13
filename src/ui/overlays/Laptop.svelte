<script>
  import { currentState, DISPLAYLIMIT } from '../../lib/stores.js';
  import SocialMediaApp from './applications/SocialMediaApp.svelte';
  import FiresSite from './applications/FiresSite.svelte';

  let laptopState = 0;

  const scene = {
    0: false,
    1: SocialMediaApp,
    2: FiresSite
  };
</script>

<container>
  <viewport>
    {#if laptopState == 0}
      <button
        on:click={() => {
          laptopState = 1;
        }}>SocialMedia</button>
      <button
        on:click={() => {
          laptopState = 2;
        }}>RFS/ACT Site</button>
    {/if}
    <svelte:component this={scene[laptopState]} parent={1} />
  </viewport>

  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2428 1793">
    <image
      width="2428"
      height="1793"
      xlink:href="BushfiresProject/laptop.png" />
    <circle
      r="61"
      cx="2243"
      cy="121"
      on:click={() => {
        $currentState.overlayComponent = 0;
      }}
      class="clickable" />
    <circle
      r="61"
      cx="191"
      cy="121"
      on:click={() => {
        laptopState = 0;
      }}
      class="clickable" />
  </svg>
</container>

<style>
  container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  viewport {
    position: absolute;
    margin-top: 10.75%;
    margin-left: 2.65%;
    height: 81.35%;
    width: 94.55%;
    border-radius: 20px;
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
  @keyframes glow {
    0% {
      opacity: 0.1;
    }
    25% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.1;
    }
  }
  .clickable {
    fill: #dfaa6e;
    animation: glow 3s linear infinite;
  }
</style>
