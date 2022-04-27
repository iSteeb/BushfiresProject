<script>
  import { currentState } from '../helpers/stores.js';
  $: if ($currentState.servedErrors.length > 3) {
    $currentState.appState = 3;
  }
</script>

<!-- TODO: - get the text to fly in then join the list https://svelte.dev/tutorial/deferred-transitions  -->
<div class="container">
  <button
    on:click={() => {
      $currentState.servedErrors = ['next', ...$currentState.servedErrors];
    }}>Next</button>

  {#each $currentState.servedErrors as error}
    <p>{error}</p>
  {/each}
</div>

<style>
  .container {
    position: absolute;
    width: 100vw;
    text-align: center;
    top: 90%;
    height: 10%;
    overflow: hidden;
  }
  button {
    z-index: 1000;
  }
</style>
