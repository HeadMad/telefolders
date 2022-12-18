<script>
  export let items = [];

</script>

<ul>
  {#each items as item, index}
  <li>
    <div>{index} {item.name}</div>
    {#if item.child.length}
      <svelte:self items={item.child}/>
    {/if}
  </li>
  {/each}
</ul>

<style>
  ul {

    z-index: 10000;
    background: #eee;
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 400;
  }
  li {
    white-space: nowrap;
  }
</style>