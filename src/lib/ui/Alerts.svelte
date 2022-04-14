<script>
  import { scenario, state } from '../stores.js';
  $: if ($scenario.length > 3) {
    state.set(3);
  }
</script>

<div id="container">
  <button
    on:click={() => {
      $scenario = ['next', ...$scenario];
    }}>Next</button>

  {#each $scenario as alert}
    <p>{alert}</p>
  {/each}
</div>

<style>
  #container {
    position: absolute;
    width: 100vw;
    text-align: center;
    top: 90%;
    height: 10%;
    overflow: hidden;
  }
</style>
