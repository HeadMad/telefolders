<script>
  import { outsideClick } from '../lib'
  export let items = [];
  export let current = 'All';
  export let visible = false;
  export const toggle = () => visible = !visible;
  
</script>


<div use:outsideClick={() => visible = false}>
  <span class="noselect" on:click={toggle}>{current}</span>
  {#if visible}
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
  {/if}
</div>

<style>
  div {
    display: inline-block;
    font-size: .75em;
    position: relative;
    background-color: var(--hint-color);
    padding: .4em .6em;
    border-radius: .2em;
    cursor: pointer;
  }

  ul {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1000;
    background-color: #fff;
    padding: 0;
    margin: 0;
    border-radius: .2em;
    min-width: 100%;
    box-shadow: 0 3px 5px rgba(0,0,0,.3);
    list-style: none;
  }

  li {
    padding: .4em .6em;
  }


</style>

