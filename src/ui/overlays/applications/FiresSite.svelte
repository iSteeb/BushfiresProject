<script>
  import { currentState, alerts } from '../../../lib/stores.js';
  export let parent;
</script>

{#if !$currentState.nonfunctionalComponents.includes(parent)}
  <div class="navbar">
    <b>ACT ESA</b><br />
    <p>In a life threatening emergency dial <red>Triple Zero (000)</red></p>
  </div>
  {#each $currentState.servedAlertsIndexes as index}
    <div class="alert">
      <p>
        <b>{alerts[index].time} <update>UPDATE</update></b>
      </p>
      <p>
        This is a{#if alerts[index].level != 'watch and act'}n{/if}
        {alerts[index].level} level bushfire warning. {alerts[index].threat}
        {$currentState.roadsBlocked
          ? 'The fire has caused aprinciple road on your evacuation route to be blocked. Do you have an alternate route to take? '
          : ''}
        {alerts[index].shortText}
        {alerts[index].fullText}
      </p>
      <ul>
        <li>Check the ESA website.</li>
        <li>Follow the ESA Twitter and Facebook accounts.</li>
        <li>Download and monitor the NSW RFS Fires Near Me mobile app.</li>
        <li>Stay tuned to your local radio station.</li>
        <li>Contact Access Canberra on 13 22 81</li>
        <li>
          For the most up to date road closures, visit the ACT Policing Traffic
          Twitter.
        </li>
      </ul>
    </div>
  {/each}
{:else}
  <div class="error">
    <p>Error: could not connect to the internet.</p>
  </div>
{/if}

<style>
  .navbar {
    background-color: rgb(48, 48, 48);
    color: rgb(219, 219, 219);
    padding-left: 5%;
    font-size: min(5vh, 5vw);
  }
  .navbar p {
    font-size: 8px;
    font-weight: 800;
    text-align: center;
  }
  .navbar red {
    color: rgb(212, 35, 35);
  }
  .error {
    padding-top: 25%;
    text-align: center;
  }
  .alert {
    margin: 5% 5% 0% 15%;
    padding: 2%;
    border-bottom: 2px dashed #424242;
  }
  .alert update {
    background-color: green;
    border: 1px solid slategray;
  }
  .alert b {
    color: #0b182d;
  }
</style>
