<script>
  import { outsideClick, headroom } from "../lib";
  import { Gallery } from "../components";
  const images = Array.from(Array(24), (_, i) => ({
    thumb: `https://picsum.photos/id/${230 + i}/200/320`,
    type: "photo",
  }));
  let gallery;
  let selectedCount;
  let allSelected;
</script>

<header use:headroom={{ duration: 200 }}>
  {#if allSelected}
    <span
      class="selector material-symbols-rounded"
      on:click={() => gallery.unselectAll()}
    >
      check_box
    </span>
  {:else}
    <span class="selector material-symbols-rounded" on:click={() => gallery.selectAll()}>
      {selectedCount === 0
        ? "check_box_outline_blank"
        : "indeterminate_check_box"}
    </span>
  {/if}

  <button>Add Folder</button>
  <button>Share Folder</button>
</header>

<Gallery {images} bind:this={gallery} bind:selectedCount bind:allSelected />

<style>
  :global(body) {
    margin-top: 40px;
  }
  header {
    padding: 0 16px;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
    text-align: right;
    z-index: 1000;
    width: 100%;
  }
  .selector {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
</style>
