<script>
  import {initWebApp} from '../lib/TelegramWebApp';
  const wa = initWebApp();

  let count = localStorage.count ?? 0;
  $: localStorage.count = count;


</script>

<h1>{count}</h1>
<button on:click={() => count++}>Add</button>

<style>

</style>