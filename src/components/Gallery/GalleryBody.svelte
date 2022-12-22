<script>
  import { createEventDispatcher } from "svelte";
  import { outsideClick } from "../../lib";
  import IconFolder from "svelte-mdi/svg/folder.svelte";
  export let items = [];
  export let allSelected = false;
  export let selectedCount = 0;

  let selectionOrder = [];

  let folders = [];
  let thumbs = [];

  function initItems(items) {
    allSelected = false;
    selectedCount = 0;
    selectionOrder = [];

    folders = [];
    thumbs = [];

    items.forEach((item) => {
      if (item.type === "folder") {
        console.log(item)
        return folders.push({ ...item });
      }
      selectedCount++;
      thumbs.push({
        ...item,
        isSelected: false,
        isActive: false,
      });
    });
  }

  $: initItems(items)

  const dispatch = createEventDispatcher();

  export const unselectAll = () => {
    thumbs.forEach((thumb) => (thumb.isSelected = false));
    selectionOrder = [];
    allSelected = false;
    selectedCount = 0;
  };

  export const selectAll = () => {
    thumbs.forEach((thumb, i) => {
      if (thumb.isSelected) return;
      thumb.isSelected = true;
      selectionOrder.push(i);
    });
    selectedCount = thumbs.length;
    allSelected = true;
  };

  const imageUrl = (thumb) =>
    `https://firebasestorage.googleapis.com/v0/b/telefolders.appspot.com/o/${encodeURIComponent(
      thumb
    )}?alt=media`;
</script>

<div class="gallery">
  <div class="folders">
    {#each folders as folder}
      <div class="box">
        <div class="folder nohighlight" on:click={() => dispatch("clickFolder", folder)}>
          <div class="folder-name">
            <IconFolder color="var(--hint-color)" size="64" /><br />
            {folder.name}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="thumbs">
    {#each thumbs as image, index}
      <div
        class="box"
        class:selected={image.isSelected}
        class:active={image.isActive}
      >
        <div class="image">
          <img
            src="{image.thumb}"
            alt=""
            on:click={() => (image.isActive = true)}
            use:outsideClick={() => (image.isActive = false)}
          />
        </div>
        <span
          class="check nohighlight"
          on:click={function () {
            if (image.isSelected) {
              selectionOrder.splice(selectionOrder.indexOf(index), 1);
              image.isSelected = false;
              selectedCount--;
            } else {
              selectedCount++;
              selectionOrder.push(index);
              image.isSelected = true;
            }
            allSelected = selectionOrder.length === thumbs.length;
          }}
          data-order={image.isSelected ? selectionOrder.indexOf(index) + 1 : ""}
        />
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  @import '../../styles/.nohighlight.css';

  .gallery {
    margin: 4px;
  }


  .folders,
  .thumbs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .folder {
    position: absolute 0;
    display: flex;
    cursor: pointer;
  }

  .folder-name {
    text-align: center;
    margin: auto;
    font-size: .8rem;
  }

  .check {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    padding: 10px;
  }
  .check:active,
  .check:focus {
    background: none;
    user-select: none;
    outline: 0;
  }

  .check::before {
    content: attr(data-order);
    display: block;
    min-width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    color: var(--primary-inverse-color);
    font-size: .8rem;
    font-weight: 500;
    border-radius: 50%;
    background: #00000033;
    box-shadow: inset 0 0 0 2px #fff;
    text-align: center;
    padding: 0 .3rem;
    box-sizing: border-box;
  }
  
  .selected .check::before {
    background-color: var(--primary-color);
    box-shadow: 0 0 0 1px var(--bg-color);
  }
  
  .box {
    position: relative;
    max-width: 320px;
  }
  .box::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .image {
    position: absolute 2px;
  }

  .selected .image {
    position: absolute 15px;
  }

  .active .image {
    position: fixed 0;
    background-color: #000000;
    z-index: 1000;
    display: flex;
  }

  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .active img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: auto;
  }
</style>
