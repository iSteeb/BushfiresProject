<script>
  import { scenario } from '../stores.js';
</script>

<div>
  {#each $scenario as alert}
    <p>{alert}</p>
  {/each}
</div>

<style>
  div {
    position: absolute;
    width: 100vw;
    text-align: center;
    top: 90%;
    height: 10%;
    overflow: hidden;
  }
</style>
