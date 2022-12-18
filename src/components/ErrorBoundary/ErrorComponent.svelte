<script>
  import Alert from "../Alert.svelte";
  export let error;
  let alert;
  $: error && alert && alert.show(error.message, 6000);
</script>

<style>
	.error {
		border: 1px solid red;
	
	}
	.trace {
		font-family: monospace;
	}
</style>
<slot>
	{#if error}
	<div class="error">
		<b>{error.message}</b>
		<pre class="trace">
			{error.stack}
		</pre>
	</div>
	{/if}
	
</slot>