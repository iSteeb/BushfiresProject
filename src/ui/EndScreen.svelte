<script>
  import { fade } from 'svelte/transition';
  import { finalTime } from '../lib/stores.js';
</script>

<container in:fade={{ duration: 1000 }}>
  final time: {$finalTime}
</container>

<style>
  container {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    background: #000;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
