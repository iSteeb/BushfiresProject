<script>
  import { initialised, showMenu } from './stores.js';

  let showInfoPanel = false;
  
  let initialisedValue;
  	initialised.subscribe(value => {
		initialisedValue = value;
	});

  let showMenuValue;
	showMenu.subscribe(value => {
		showMenuValue = value;
	});

  function start() {
    initialised.set(true);
    showMenu.set(false);
    showInfoPanel = false;
  }

  function reset() {
    initialised.set(false);
    showMenu.set(true);
    showInfoPanel = false;
  }

  function resume() {
    showMenu.set(false);
    showInfoPanel = false;
  }

  function toggleMenu() {
    showMenu.set(!showMenuValue);
    showInfoPanel = false;
  }

  function toggleShowInfoPanel() {
    showInfoPanel = !showInfoPanel;
  }
</script>

<main>
  {#if showMenuValue}
    {#if !initialisedValue}
    <button on:click={start}>Start</button>
    <button on:click={toggleShowInfoPanel}>Info</button>
    {:else}
    <button on:click={resume}>Resume</button>
    <button on:click={reset}>Reset</button>
    <button on:click={toggleShowInfoPanel}>Info</button>
    {/if}
  {:else}
    <button on:click={toggleMenu}>Menu</button>
  {/if}

  {#if showInfoPanel}
    <div>
      <h1>Info</h1>
      <p>
        This is a simple Svelte app.
      </p>
    </div>
  {/if}
</main>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>