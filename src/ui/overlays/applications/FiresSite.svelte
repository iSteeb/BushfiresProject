<script>
  import { currentState, alerts } from '../../../lib/stores.js';
  export let parent;
</script>

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
<!-- TODO: fires site component -->
