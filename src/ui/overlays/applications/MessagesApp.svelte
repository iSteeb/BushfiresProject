<script>
  import { currentState, alerts } from '../../../lib/stores.js';

  let alertIndexes = $currentState.servedAlertsIndexes;
  alertIndexes.reverse();
</script>

<!-- phone only -->
{#each $currentState.servedAlertsIndexes as index}
  {#if alerts[index].level == 'emergency warning'}
    <div class="message">
      {alerts[index].time}
      {alerts[index].level}
      {$currentState.roadsBlocked}
      {alerts[index].threat}
      {alerts[index].fullText}
    </div>
  {/if}
{/each}

<style>
  .message {
    margin-left: 1%;
    margin-top: 1%;
    border-radius: 1.15rem;
    line-height: 1.25;
    max-width: 75%;
    padding: 3%;
    position: relative;
    background-color: rgb(142, 231, 107);
  }
</style>
