<script>

    export let modalWin;

</script>
<pre>{JSON.stringify(globalThis.Telegram.WebApp.themeParams, null, ' ')}</pre>
<div><button on:click={modalWin.close}>Close</button></div>


<style>
  pre, div {
    padding: 1rem 1.4rem;
  }
</style>