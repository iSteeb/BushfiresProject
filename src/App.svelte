<script>
  import { currentState, defaultState } from './lib/stores.js';
  import Intro from './ui/Intro.svelte';
  import Desk from './ui/Desk.svelte';
  import { fade } from 'svelte/transition';
  import { finalTime } from './lib/stores.js';
  // this may appear as a problem ('cannot find module svelte-outclick') however, the imported component is completely functional and does import correctly
  import OutClick from 'svelte-outclick';
  import Info from './ui/overlays/Info.svelte';
  import { onMount } from 'svelte';

  const scene = {
    0: false,
    1: Intro,
    2: Desk,
    3: false
  };

  // code preceeded by $: in Svelte designates code that will re-run whenever it detects a change in value
  // this line sets the CSS opacity of the background based on the game state
  // full opacity is desired on the main menu, and low opacity on other screens where visible
  // however the transition between home page and intro components means it must remain fully opaque until the transition is complete
  // as it is hidden (low z-index) element in the intro screen, it can remain fully opaque until the desk screen
  $: bgOpacity =
    scene[$currentState.appState] == false ||
    scene[$currentState.appState] == Intro
      ? 'opacity: 1'
      : 'opacity: 0.075';

  // when the app is launched for the first time, users are quickly prompted with an information section from which they can easily out-click
  onMount(() => {
    setTimeout(() => {
      $currentState.overlayComponent = 99;
    }, 1000);
  });
</script>

<div id="bg">
  <img
    style={bgOpacity}
    height="100%"
    width="100%"
    src="BushfiresProject/bg.png"
    alt="bg" />
</div>

<!-- the svelte:component tag functions as shorthand for an if/elseif block of cases for which component to render -->
<svelte:component this={scene[$currentState.appState]} />
<!-- on the title screen, no other compoennt is rendered, so the title elements are selectively displayed if in this state -->
{#if $currentState.appState == 0}
  <div id="title">BUSHFIRE SIMULATOR</div>

  {#if $currentState.overlayComponent == 99}
    <!-- the OutClick wrapper around a component means any clicks (mousedown or touchstart events) outside of that component trigger an action-->
    <OutClick on:outclick={() => ($currentState.overlayComponent = 0)}>
      <svelte:component this={Info} />
    </OutClick>
  {:else}
    <container in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
      <button
        class="btn startButton"
        on:click={() => {
          $currentState.appState = 1;
          $currentState.showMenu = false;
        }}>simulate fire</button>
      <button
        class="btn"
        on:click={() => {
          $currentState.overlayComponent = 99;
        }}>information</button>
    </container>
  {/if}
{/if}

<!-- on the title screen, no other compoennt is rendered, so the finished game elements are selectively displayed if in this state -->
{#if $currentState.appState == 3}
  <div in:fade={{ duration: 1500 }} out:fade={{ duration: 250 }}>
    <!-- the OutClick wrapper around a component means any clicks (mousedown or touchstart events) outside of that component trigger an action-->
    <OutClick
      on:outclick={() => {
        $currentState = Object.assign({}, defaultState);
      }}>
      <div class="popup">
        <h1>Congratulations!</h1>
        <p style="text-align:center">
          <br />Final Time:
          <b style="color: rgb(212, 35, 35)">{$finalTime}</b>
        </p>
        <br />
        <p>
          Quick decision making and actions are crucial to surviving a bushfire
          event. Do you think you can improve on your time with more practice?
        </p>
      </div>
    </OutClick>
  </div>
{/if}

<style>
  container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #bg {
    position: absolute;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }
  #title {
    position: absolute;
    top: 20%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    font-size: 12vh;
    color: #f5f5f5;
    text-shadow: 0 0 10px rgb(127, 98, 26);
    font-family: Blockhead;
    font-weight: bold;
  }
</style>
