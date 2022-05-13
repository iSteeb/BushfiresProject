<!-- TODO: THIS -->
<script>
  import { currentState, alerts } from '../../../lib/stores.js';
</script>

<!-- phone only -->

{#each $currentState.servedAlertsIndexes as index}
  {alerts[index].time}
  {alerts[index].level}
  {$currentState.roadsBlocked}
  {alerts[index].threat}
  {alerts[index].fullText}<br /><br />
{/each}
