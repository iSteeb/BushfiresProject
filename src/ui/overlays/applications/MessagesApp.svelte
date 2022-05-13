<script>
  import { currentState, alerts } from '../../../lib/stores.js';

  let alertIndexes = $currentState.servedAlertsIndexes;
  alertIndexes.reverse();
  export let parent;
</script>

<!-- phone only -->
{#if !$currentState.nonfunctionalComponents.includes(parent)}
  {parent}

  {#each $currentState.servedAlertsIndexes as index}
    {alerts[index].time}
    {alerts[index].level}
    {$currentState.roadsBlocked}
    {alerts[index].threat}
    {alerts[index].fullText}<br /><br />
  {/each}
{:else}
  the {parent} is broken
{/if}
