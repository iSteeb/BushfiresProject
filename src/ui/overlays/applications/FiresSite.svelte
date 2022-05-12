<!-- TODO: THIS -->
<script>
  import { currentState, alerts } from '../../../lib/stores.js';

  export let alertIndexes = [];
</script>

<!-- phone only -->

{#each alertIndexes as index}
  {alerts[index].time}
  {alerts[index].level}
  {$currentState.roadsBlocked}
  {alerts[index].threat}
  {alerts[index].fullText}<br /><br />
{/each}
