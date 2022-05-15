<script>
  import { onDestroy } from 'svelte';
  import { currentState, alerts, AUDIOSETTINGS } from '../../lib/stores.js';

  let speech = new SpeechSynthesisUtterance();
  speech.lang = AUDIOSETTINGS.lang;

  let playbackEnabled = !$currentState.nonfunctionalComponents.includes(4);
  let toneAudio = new Audio('BushfiresProject/tone.mp3');
  toneAudio.loop = AUDIOSETTINGS.loop;
  toneAudio.volume = AUDIOSETTINGS.volume;

  let playing = false;

  function toggleAlert() {
    if (playbackEnabled && $currentState.gameState >= 0) {
      let roadBlockMessage = $currentState.roadsBlocked
        ? 'Be aware that a principle road on your evacuation route has been blocked. Do you have an alternate route to take? '
        : '';
      speech.text =
        'Thank you for calling your local fire agency. The latest update on the bushfire classifies it at the ' +
        alerts[$currentState.gameState].level +
        ' level. ' +
        roadBlockMessage +
        alerts[$currentState.gameState].threat +
        alerts[$currentState.gameState].shortText +
        " You can also check out the latest news on the bushfire on your local fire agency's website.";
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        playing = false;
      } else {
        window.speechSynthesis.speak(speech);
        playing = true;
      }
    } else {
      if (toneAudio.paused) {
        toneAudio.play();
        playing = true;
      } else {
        toneAudio.pause();
        toneAudio.currentTime = 0;
        playing = false;
      }
    }
  }
  onDestroy(() => {
    toneAudio.pause();
    toneAudio.currentTime = 0;
    window.speechSynthesis.cancel();
  });
</script>

<container>
  <svg
    id="landline"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 848 896">
    <image
      width="848"
      height="896"
      xlink:href="BushfiresProject/landline.png" />
  </svg>
  {#if !playing}
    <dial>
      <button
        class="icon"
        id="call"
        on:click={() => {
          toggleAlert();
        }}>
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg">
          <path
            transform="translate(8,8)"
            fill="green"
            d="m9.5803 0.38543 8.3768 8.3478c0.12265 0.21697 0.32118 0.63543 0.35647 1.1985 0.03114 0.49684-0.07825 0.89214-0.15982 1.1187l-3.6749 3.5668c-0.27577 0.31671-0.58159 0.75288-0.80002 1.319-0.69528 1.802 0.04475 3.4954 0.2493 3.9273 0.31081 0.84292 0.80824 1.9978 1.6 3.2645 1.0025 1.6038 1.9849 2.5996 3.379 3.9955 1.5403 1.5421 2.6769 2.6802 4.5206 3.7672 1.3705 0.80801 2.6072 1.2785 3.4568 1.5526 0.45206 0.11099 1.2639 0.24839 2.251 0.06847 1.0344-0.18853 1.7707-0.63609 2.1548-0.90905l3.6232-3.6232c0.17467-0.11769 0.50538-0.30459 0.95721-0.35366 0.77729-0.08441 1.3515 0.30007 1.5066 0.41163l8.2608 8.4637c0.11224 0.16441 0.39741 0.62859 0.3925 1.2845-0.00455 0.60677-0.2548 1.0405-0.3653 1.2101l-3.5845 3.6073-1.4282 1.1444c-0.71847 0.52023-1.9022 1.2603-3.5043 1.7449-2.7104 0.81996-5.0191 0.42532-6.7799 0.12434-1.1737-0.20062-2.8701-0.59891-4.8172-1.4635-0.90081-0.33605-2.0109-0.80014-3.2422-1.4361-0.39772-0.20541-1.7308-0.90532-3.4018-2.0548-8e-5 -6e-5 -1.6474-1.1332-3.3562-2.6256-3.9371-3.4384-9.5603-10.162-9.8837-10.55-0.33671-0.50947-0.81812-1.2534-1.3721-2.1669-0.92485-1.5251-1.8156-3.1331-2.2375-3.9955-0.60639-1.2395-1.6428-3.7975-1.9986-8.0582-0.07826-0.77583-0.10004-1.7647 0.06931-2.89 0.28507-1.8942 0.98574-3.3383 1.5184-4.2346l1.9046-2.365 3.4492-3.3913c0.17589-0.11525 0.62992-0.37919 1.2672-0.38532 0.66416-0.00639 1.138 0.27098 1.3125 0.38532z" />
        </svg></button>
    </dial>
  {:else}
    <dial>
      <button
        class="icon"
        id="endcall"
        on:click={() => {
          toggleAlert();
        }}>
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill="rgb(141, 46, 22)"
            transform="translate(8,8)"
            d="m9.5803 0.38543 8.3768 8.3478c0.12265 0.21697 0.32118 0.63543 0.35647 1.1985 0.03114 0.49684-0.07825 0.89214-0.15982 1.1187l-3.6749 3.5668c-0.27577 0.31671-0.58159 0.75288-0.80002 1.319-0.69528 1.802 0.04475 3.4954 0.2493 3.9273 0.31081 0.84292 0.80824 1.9978 1.6 3.2645 1.0025 1.6038 1.9849 2.5996 3.379 3.9955 1.5403 1.5421 2.6769 2.6802 4.5206 3.7672 1.3705 0.80801 2.6072 1.2785 3.4568 1.5526 0.45206 0.11099 1.2639 0.24839 2.251 0.06847 1.0344-0.18853 1.7707-0.63609 2.1548-0.90905l3.6232-3.6232c0.17467-0.11769 0.50538-0.30459 0.95721-0.35366 0.77729-0.08441 1.3515 0.30007 1.5066 0.41163l8.2608 8.4637c0.11224 0.16441 0.39741 0.62859 0.3925 1.2845-0.00455 0.60677-0.2548 1.0405-0.3653 1.2101l-3.5845 3.6073-1.4282 1.1444c-0.71847 0.52023-1.9022 1.2603-3.5043 1.7449-2.7104 0.81996-5.0191 0.42532-6.7799 0.12434-1.1737-0.20062-2.8701-0.59891-4.8172-1.4635-0.90081-0.33605-2.0109-0.80014-3.2422-1.4361-0.39772-0.20541-1.7308-0.90532-3.4018-2.0548-8e-5 -6e-5 -1.6474-1.1332-3.3562-2.6256-3.9371-3.4384-9.5603-10.162-9.8837-10.55-0.33671-0.50947-0.81812-1.2534-1.3721-2.1669-0.92485-1.5251-1.8156-3.1331-2.2375-3.9955-0.60639-1.2395-1.6428-3.7975-1.9986-8.0582-0.07826-0.77583-0.10004-1.7647 0.06931-2.89 0.28507-1.8942 0.98574-3.3383 1.5184-4.2346l1.9046-2.365 3.4492-3.3913c0.17589-0.11525 0.62992-0.37919 1.2672-0.38532 0.66416-0.00639 1.138 0.27098 1.3125 0.38532z" />
        </svg></button>
    </dial>
  {/if}
</container>

<style>
  #landline {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #call {
    height: min(10vh, 10vw);
    background-color: rgb(89, 149, 112);
    border: 2px solid rgb(44, 148, 84);
    border-radius: calc(min(10vh, 10vw) / 2);
  }
  #endcall {
    height: min(10vh, 10vw);
    background-color: rgb(149, 89, 89);
    border: 2px solid rgb(149, 89, 89);
    border-radius: calc(min(10vh, 10vw) / 2);
  }

  @media (orientation: landscape) {
    #landline {
      height: 50vh;
      width: auto;
    }
    dial {
      position: fixed;
      top: 57%;
      left: 50.5%;
      transform: translate(-50%, -50%);
    }
  }

  @media (orientation: portrait) {
    #landline {
      width: 50vw;
      height: auto;
    }
    dial {
      position: fixed;
      top: 55%;
      left: 52%;
      transform: translate(-50%, -50%);
    }
  }
</style>
