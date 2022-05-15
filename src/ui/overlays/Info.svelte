<script>
  import { fade } from 'svelte/transition';
  import { currentState } from '../../lib/stores.js';
</script>

<info class="popup" transition:fade={{ duration: 500 }}>
  <p class="outclick">Click outside of this box to continue.</p>
  {#if $currentState.appState == 0}
    <p>
      In Australia, bushfires present a serious and ongoing threat, even to
      those living in urban areas. To help Australians be ready in the event of
      a disaster, the <b>Prepare. Act. Survive.</b> guidelines suggest that
      everyone be prepared with a <b>Bushfire Survival Plan</b>. However, just
      having a plan isn't enough: knowing your plan well, and being able to act
      quickly, decisively, and co-operatively are also important to maximise
      your chances of survival in dire circumstances.
    </p>
    <p>
      This application is designed to simulate a bushfire event, by virtually
      presenting you with notifications and alerts on which you should act in
      accordance with your <b>Bushfire Survival Plan</b>. With these realistic
      alerts, rehearsing your Bushfire Survival Plan has become easier and more
      effective!
    </p>
  {:else if $currentState.appState == 1}
    <p>
      Welcome to the <i>Bushfire Simulator</i>. It's a hot and dry Summer day as
      you're driving home - perfect conditions for a bushfire. Luckily, you are
      prepared with a <b>Bushfire Survival Plan</b>!
    </p>
    <p>
      This game will simulate a bushfire event near you, as a tool to assist you
      in rehearsing your plan. You will be presented with a series of alerts on
      which you should act in accordance to your plan. If <b>evacuation</b> is
      part of your plan, <i>keep your route in mind</i> as you will need to get
      to a safe place and remember that bushfires can also cause
      <b>roadblocks</b>!
    </p>
  {:else if $currentState.appState == 2}
    <p>
      Welcome to your dashboard, where you can interact with various elements to
      receive and view updated information on a nearby fire.
    </p>
    <p>
      <i>Interacting</i><br />You can interact with any of the glowing elements
      on this dashboard. The <b>radio, landline, smartphone and laptop</b> all represent
      devices that you might use in real life. By clicking on each device, you will
      be presented with a new interactive screen, with applications, and buttons
      that you can use to find the information you need. You can exit any popup simply
      by clicking outside of it.
    </p>
    <p>
      However, be warned! Fires are devastating and can cause damage to
      communication systems, roads and more. In extreme situations, you may find
      that some of your devices do not work. Perhaps if the internet is down,
      you'll have to rely on your local radio station to provide you the
      information you need.
    </p>
    <p>
      <i>Progressing</i><br />Just like during a real bushfire, the fire is
      unpredictable and grows with time. As the clock ticks, the simulation will
      progress towards the next alert and you must act quickly in this time!
      Your task is to quickly find the information you need about the state of
      the bushfire, and decisively act in accordance to your
      <b>Bushfire Surivival Plan</b>. Your goal is to successfully progress
      through all of the fire updates and alerts and effectively complete the
      tasks in your plan.
    </p>
    <p>
      Your plan may not require you to take action during many of the alert
      levels you will encounter. Rather than sit and wait, just watching for the
      next update, you can choose to skip ahead in time by clicking the clock.
      This will immediately jump to the time of the next released alert for you
      to find and act on.
    </p>
  {/if}
</info>

<!-- TODO: prompt the user to think of the route in intro info also inform users that stuff may break (phones etc) as the fire gets worse, but may also come back online as it gets better -->
<style>
  b {
    color: rgb(212, 35, 35);
  }
  p {
    padding: 2%;
  }
  i {
    color: darkcyan;
    font-weight: bold;
  }
  .outclick {
    text-align: center;
    font-size: 12px;
  }
</style>
