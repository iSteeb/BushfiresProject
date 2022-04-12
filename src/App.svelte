<script>
  import Menu from './lib/Menu.svelte';
  import Desk from './lib/Desk.svelte';
  import { initialised } from './lib/stores.js';
  let initialisedValue;
  	initialised.subscribe(value => {
		initialisedValue = value;
	});
</script>

<main>
  {#if initialisedValue}
    <Desk/>
  {/if}
  <Menu/>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    background-image: url(../assets/background.png);
  }
</style>