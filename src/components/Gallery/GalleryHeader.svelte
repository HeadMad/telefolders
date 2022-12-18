<script>
  import { createEventDispatcher } from "svelte";
  import IconShare from "svelte-mdi/svg/share-variant.svelte";
  import IconPlus from "svelte-mdi/svg/plus.svelte";
  import IconFolderOpen from "svelte-mdi/svg/folder-open.svelte";
  // import FoldersMenu from './FoldersMenu.svelte';

  export let name = ''
  const dispatch = createEventDispatcher();
  function onPlusClick() {
    dispatch('plusClick');
  }

</script>
<header>
  <span class="folder-icon">
    <IconFolderOpen size="24" color="var(--text-color)" />
  </span>

  <h1>{name}</h1>
  <span class="icon nohighlight" on:click={onPlusClick}>
    <IconPlus size="24" color="var(--hint-color)" />
  </span>
  <span class="icon nohighlight">
    <IconShare size="24" color="var(--hint-color)" />
  </span>
</header>

<style>
  header {
    display: flex;
    padding: 0 8px;
    align-items: center;
  }
  .icon,
  .folder-icon {
    display: inline-block;
    align-self: center;
    size: 24px;
    /* background-color: #eee; */
    cursor: pointer;
    padding: 8px;
    margin-left: 8px;
  }
  .folder-icon {
    padding: 0;
  }
  h1 {
    font-size: 1.4em;
    flex-grow: 1;
    margin-left: 8px;
    font-weight: 700;
    white-space: nowrap;
    
  }
</style>
