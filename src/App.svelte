<script>
  import { initWebApp, sendWebAppQuery } from "./lib/TelegramWebApp.js";
  const WebApp = initWebApp(window.Telegram);
  let sendResponse;

  function sendDataToWebHook() {
    sendResponse = sendWebAppQuery({ hello: "there" });
  }
</script>

<!-- <pre>
  {JSON.stringify(WebApp, null, ' ')}
</pre> -->
{#if sendResponse}
  <pre>
{#await sendResponse}
      Send data to telegram bot
    {:then response}
      {JSON.stringify(response, null, " ")};
    {:catch error}
      {error}
    {/await}
  </pre>
{/if}

<button on:click={sendDataToWebHook}>Send Web App Query</button>

<style>
  pre {
    background: #eee;
    padding: 1em 1.5em;
    overflow-x: auto;
    max-width: 100%;
    box-sizing: border-box;
  }
</style>
