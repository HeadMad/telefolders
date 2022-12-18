<script>
  // import IconClose from "svelte-mdi/svg/close.svelte";
  export let visible = false;
  export const show = () => visible = true;
  export const hide = () => visible = false;
  export let title = '';


</script>

{#if visible}
  <div class="modal">
    <div class="overlay" on:click={hide}></div>
    <div class="window">
      <header class="header">{title}</header>
      <div class="body">
        <slot/>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--viewport-height);
    display: flex;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .overlay {
    position: absolute 0;
    background: #00000090;
  }
  .window {
    position: relative;
    margin: auto;
    min-width: 50%;
    max-width: 80%;
    background-color: var(--bg-color);
    border-radius: .9rem;
  }
  .header {
    padding: 1.5rem 1.5rem 0;
    font-weight: 500;
    font-size: 1.2em;
  }
  /* .header-text {
    flex-grow: 1;
  }
  .header-icon {
    size: 18px;
    background-color: #eee;
    color: gray;
    cursor: pointer;
  } */
  .body {
    padding: .75rem 1.5rem 1.5rem;

  }
  
</style>