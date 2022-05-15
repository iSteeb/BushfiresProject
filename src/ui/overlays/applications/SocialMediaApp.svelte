<script>
  import { currentState, alerts } from '../../../lib/stores.js';
  export let parent;
</script>

{#if !$currentState.nonfunctionalComponents.includes(parent)}
  <div class="navbar"><b>ESA Social Media Feed</b></div>
  {#each $currentState.servedAlertsIndexes as index}
    <div class="alert">
      <p>
        <b>ACT Emergency Services Agency</b>
        <i>{alerts[index].time}</i>
      </p>
      <p>
        This is a{#if alerts[index].level != 'watch and act'}n{/if}
        {alerts[index].level} level bushfire warning. {alerts[index].threat}
        {$currentState.roadsBlocked
          ? 'The fire has caused aprinciple road on your evacuation route to be blocked. Do you have an alternate route to take? '
          : ''}
        {alerts[index].fullText}
      </p>
      <div class="like">👍like 💬comment</div>
    </div>
  {/each}
{:else}
  <div class="error">
    <p>Error: could not connect to the internet.</p>
  </div>
{/if}

<style>
  .navbar {
    background-color: cornflowerblue;
    color: darkslategray;
    padding-left: 5%;
    font-size: min(5vh, 5vw);
  }
  .error {
    padding-top: 25%;
    text-align: center;
  }
  .alert {
    margin: 5% 15% 0% 15%;
    padding: 2%;
    background-color: slategrey;
    border-radius: 10px;
  }
  .alert i {
    font-size: 8px;
  }
  .alert b {
    color: #0b182d;
  }
  .like {
    text-align: right;
    font-size: 8px;
  }
</style>
