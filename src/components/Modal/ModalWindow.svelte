<script>
  // import IconClose from "svelte-mdi/svg/close.svelte";
  export let visible = false;
  export const show = () => visible = true;
  export const hide = () => visible = false;
</script>

{#if visible}
  <div class="modal">
    <div class="overlay" on:click={hide} />
    <div class="window"><slot/></div>
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
    border-radius: 0.9rem;
  }
</style>
