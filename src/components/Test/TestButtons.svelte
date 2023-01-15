<script>
    import { initWebApp, sendWebAppQuery } from "../../lib/TelegramWebApp.js";
    import {error, modal} from "../../lib/store";

    let modalContentThemeParams;
  
    const WebApp = initWebApp();
    let modalVisible = false;
    let botAnswer;
    function sendInBot() {
    send('sendInBot', [rawData, {
      method: 'sendMessage',
      text: 'Hello from web app'
    }])
    .then(resp => {
      console.log(resp)
      botAnswer = resp
    })
    .catch(({message}) => console.warn(message));
    botAnswer = 'Загружаю...';
  }

  function modalThemeParams() {
    modal.set(import('./modal/ThemeParams.svelte'));
  }

  error.subscribe(value => console.log('VALUE: ', value))
</script>



  <div class="tmp">
    <button on:click={() => {WebApp.showPopup({title: "popup title", message: 'This is popup message\nSecond row', buttons: [{type: 'destructive', text: 'Remove'}, {type: 'ok'}, {type: 'close'}]}, () => {})}}>Popup</button>
    <button on:click={() => { WebApp.showConfirm('Please confirm \n this message', () => {}) }}>Confirm</button>
    <button on:click={() => modalVisible = true}>Sending to bot</button>
    <button on:click={() => sendWebAppQuery('Hello', {hi: 'there'})}>Send WA Query</button>
    <button on:click={() => error.set('Hello WTF')}>No method</button>
    <button on:click={modalThemeParams}>Theme Params</button>
    <hr>
    <br>
    <input type="checkbox" role="switch"/>
    <input type="checkbox" />
    <input type="checkbox" indeterminate="true" />
    <input type="radio" name="" id="">
    <br>
    <a href="https://allacakes.ru">Cakes from alla</a>
  </div>

<!-- <Modal bind:visible={modalVisible} title="Theme colors">
  <button on:click={sendInBot}>Send</button>
  <br>
<pre>{JSON.stringify(botAnswer, null, ' ')}</pre>
</Modal> -->


<style>
  .tmp {
    padding: 1em;
    /* background-color: var(--bg-secondary-color); */
    white-space: nowrap;
    overflow: auto;
    /* scrollbar-width: none; */

  }
</style>