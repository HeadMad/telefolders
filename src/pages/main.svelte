<script>
  import { send } from "../lib";
  import { Gallery, CheckboxMaster, Footer } from "../components";
    import Folder from "./folder.svelte";

const folder = send('folder_id');
 

  let gallery;
  let selectedCount;
  let allSelected;
</script>

<header>
  <h1>{folder.name}</h1>
  <CheckboxMaster
  marked={allSelected}
  half={selectedCount}
  color={!selectedCount ? '#999' : 'royalblue'}
  on:click={() => gallery[allSelected ? 'unselectAll' : 'selectAll']()}
  />
  
  
  
</header>


  <Gallery
  items={folder.items}
  bind:this={gallery}
  bind:selectedCount
  bind:allSelected
  />


<Footer />



<style>

header {
  display: flex;
  padding: 0 16px;
  align-items: center;
}
  h1 {
    font-size: 1.5em;
    flex-grow: 1;
    
  }

</style>
