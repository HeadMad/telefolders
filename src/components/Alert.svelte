<script>
  import { createEventDispatcher } from 'svelte';
  import IconClose from "svelte-mdi/svg/close.svelte";
  export let message = '';
  export let visible = false;

  const dispatch = createEventDispatcher();

  let openTimer, closeTimer;

  export const hide = () => {
    visible = false;
    clearTimeout(openTimer);
    closeTimer = setTimeout(() => message = '', 400);
    dispatch('close');
  };
  export const show = (text = '', ms = 0) => {
    message = text;
    clearTimeout(closeTimer);
    visible = true;
    if (ms)
      openTimer = setTimeout(hide, ms)

  };
</script>


  <div class="error" class:visible>
    <div class="error-window">
      <span class="error-close" on:click={hide}><IconClose size="1rem"/></span>
      <div class="error-message">{message}</div>
      
    </div>
  </div>


<style>
  .error {
    position: fixed;
    z-index: 1000;
    bottom: 100%;
    left: 0;
    right: 0;
    text-align: center;
  }
  
  .visible > .error-window {
    transform: translateY(calc(100% + 1.5rem));
  }
  
  .error-window {
    transition: .3s;
    display: inline-block;
    padding: 1rem 1.2rem;
    margin: 0 1.5rem;
    box-sizing: border-box;
    background: tomato;
    color: #fff;
    border-radius: .5rem;
    box-shadow: 0 0 10px 0 #00000050;
  }

  .error-close {
    cursor: pointer;
    size: 1rem;
    float: right;
  }

  .error-message {
    text-align: left;
    margin-right: 2.2rem;
  }
</style>