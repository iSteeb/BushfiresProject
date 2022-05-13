<!-- TODO: THIS -->
<script>
  import { currentState, alerts } from '../../../lib/stores.js';

  let alertIndexes = $currentState.servedAlertsIndexes;
  alertIndexes.reverse();
</script>

<!-- phone only -->

{#each alertIndexes as index}
  {#if alerts[index].level == 'emergency warning'}
    {alerts[index].time}
    {alerts[index].level}
    {alerts[index].threat}
    for more info, visit the site<br /><br />
  {/if}
{/each}
