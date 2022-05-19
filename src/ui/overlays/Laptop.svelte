<script>
  import { currentState } from '../../lib/stores.js';
  import SocialMediaApp from './applications/SocialMediaApp.svelte';
  import FiresSite from './applications/FiresSite.svelte';

  // like the component overlay index, this state sets the laptop to show the home screen or the specific chosen application
  let laptopState = 0;

  const scene = {
    0: false,
    1: SocialMediaApp,
    2: FiresSite
  };
</script>

<container>
  <viewport>
    <!-- 'home screen' on the laptop, showing sub-component (website) icons-->
    {#if laptopState == 0}
      <bookmarks>
        <button
          class="icon"
          id="social"
          on:click={() => {
            laptopState = 1;
          }}
          ><img
            src="BushfiresProject/fbIcon.png"
            height="100%"
            width="100%"
            alt="social media app" /></button>
        <button
          class="icon"
          id="esa"
          on:click={() => {
            laptopState = 2;
          }}
          ><img
            src="BushfiresProject/esaIcon.png"
            height="100%"
            width="100%"
            alt="esa app" /></button>
      </bookmarks>
    {/if}
    <!-- on top, Svelte renders the subcomponent (if any selected). the parent parameter passes down to the sub-component what the container is, specifically to reference whether the parent component is functional or not -->
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
      class={$currentState.glow} />
    <circle
      r="61"
      cx="191"
      cy="121"
      on:click={() => {
        laptopState = 0;
      }}
      class={$currentState.glow} />
  </svg>
</container>

<style>
  bookmarks {
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 10%;
    height: 100%;
  }
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
    border-radius: 3%;
    overflow: scroll;
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
