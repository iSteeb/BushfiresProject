<script>
  import { currentState } from '../../lib/stores.js';
  import SocialMediaApp from './applications/SocialMediaApp.svelte';
  import FiresSite from './applications/FiresSite.svelte';
  import MessagesApp from './applications/MessagesApp.svelte';
  import PhoneApp from './applications/PhoneApp.svelte';

  let smartphoneState = 0;

  const scene = {
    0: false,
    1: SocialMediaApp,
    2: FiresSite,
    3: MessagesApp,
    4: PhoneApp
  };
</script>

<container>
  <viewport>
    {#if smartphoneState == 0}
      <button
        on:click={() => {
          smartphoneState = 1;
        }}>SocialMedia</button>
      <button
        on:click={() => {
          smartphoneState = 1;
        }}>RFS/ACT Site</button>
      <button
        on:click={() => {
          smartphoneState = 3;
        }}>Messages App</button>
      <button
        on:click={() => {
          smartphoneState = 1;
        }}>PhoneApp</button>
    {/if}

    {#if !$currentState.nonfunctionalComponents.includes(3)}
      <!-- TODO: full signal div -->
      <svelte:component this={scene[smartphoneState]} />
    {:else}
      <!-- TODO: No signal div -->
      {#if smartphoneState != 0}
        empty content div
      {/if}
    {/if}
  </viewport>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1048 1816">
    <image
      width="1048"
      height="1816"
      xlink:href="BushfiresProject/smartphone.png" />
    <circle
      r="48"
      cx="524"
      cy="1739"
      opacity="0.5"
      on:click={() => {
        smartphoneState = 0;
      }} />
  </svg>
</container>

<style>
  viewport {
    position: absolute;
    margin-top: 9.5%;
    margin-left: 2.5%;
    height: 85.7%;
    width: 95%;
    border-radius: 20px;
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
