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
  <signal>
    {#if $currentState.nonfunctionalComponents.includes(3)}NO{:else}FULL{/if} SIGNAL
  </signal>
  <viewport>
    {#if smartphoneState == 0}
      <apps>
        <button
          class="icon"
          id="social"
          on:click={() => {
            smartphoneState = 1;
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
            smartphoneState = 2;
          }}
          ><img
            src="BushfiresProject/esaIcon.png"
            height="100%"
            width="100%"
            alt="esa app" /></button>
        <button
          class="icon"
          id="messages"
          on:click={() => {
            smartphoneState = 3;
          }}
          ><img
            src="BushfiresProject/messagesIcon.png"
            height="100%"
            width="100%"
            alt="messages app" /></button>
        <button
          class="icon"
          id="phone"
          on:click={() => {
            smartphoneState = 4;
          }}
          ><img
            src="BushfiresProject/phoneIcon.png"
            height="100%"
            width="100%"
            alt="phone app" /></button>
      </apps>
    {/if}
    <svelte:component this={scene[smartphoneState]} parent={3} />
  </viewport>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1048 1816">
    {#if smartphoneState == 4}
      <image
        width="1048"
        height="1816"
        xlink:href="BushfiresProject/smartphoneCalling.png" />{:else}
      <image
        width="1048"
        height="1816"
        xlink:href="BushfiresProject/smartphone.png" />{/if}

    <circle
      r="49"
      cx="525"
      cy="1738"
      on:click={() => {
        smartphoneState = 0;
      }}
      class={$currentState.glow} />
  </svg>
</container>

<style>
  apps {
    padding: 8%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 5%;
    height: 100%;
  }
  viewport {
    position: absolute;
    margin-top: 16.2%;
    margin-left: 2.5%;
    height: 81.9%;
    width: 95%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: scroll;
  }
  signal {
    position: absolute;
    padding-top: 2%;
    padding-right: 5%;
    margin-top: 9.2%;
    margin-left: 2.5%;
    height: 3%;
    width: 90%;
    background: #424242;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: right;
    color: white;
    font-size: 1.5vh;
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
