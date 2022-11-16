<script>
  import { createEventDispatcher } from "svelte";
  import { outsideClick } from "../../lib";
  export let images = [];
  export let allSelected = false;
  export let selectedCount = 0;

  let selectionOrder = [];
  let selectiveCount = 0; 

  const dispatch = createEventDispatcher();
  
  $: listImages = images.map((img) => {
    if (img?.type !== 'folder')
      selectiveCount++;

    return {
      ...img,
      isSelected: false,
      isActive: false,
    }
  });

  export const unselectAll = () => {
    listImages.forEach((img) => (img.isSelected = false));
    selectionOrder = [];
    allSelected = false;
    selectedCount = 0;
  };
  
  export const selectAll = () => {
    listImages.forEach((img, i) => {
      if (img.type === "folder" || img.isSelected) return;
      img.isSelected = true;
      selectionOrder.push(i);
      selectedCount = selectiveCount;
      allSelected = true;
    });
  };
</script>

<div class="gallery">
  {#each listImages as image, index}
    <div
      class="box"
      class:selected={image.isSelected}
      class:active={image.isActive}
    >
      <div class="inner">
        <div class="image">
          <img
            src={image.thumb}
            alt=""
            on:click={() => (image.isActive = true)}
            use:outsideClick={() => (image.isActive = false)}
          />
        </div>
      </div>
      <span
        class="check"
        on:click={function () {
          if (image.isSelected) {
            selectionOrder.splice(selectionOrder.indexOf(index), 1);
            image.isSelected = false;
            allSelected = 
            selectedCount--;
          } else {
            selectedCount++;
            selectionOrder.push(index);
            image.isSelected = true;
          }
          allSelected = selectionOrder.length === selectiveCount;
        }}
        data-order={image.isSelected ? selectionOrder.indexOf(index) + 1 : ""}
      />
    </div>
  {/each}
</div>

<style lang="postcss">
  .gallery {
    margin: 4px;
  }
  .gallery::after {
    content: "";
    display: block;
    clear: both;
  }

  .check {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 10px 5px 5px;
    cursor: pointer;
  }
  .check::before {
    content: attr(data-order);
    display: block;
    size: 22px;
    color: #fff;
    line-height: 20px;
    font-size: 13px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 50%;
    border: 2px solid #fff;
    background: #00000015;
    text-align: center;
    box-sizing: border-box;
  }

  .selected .check::before {
    border-width: 1px;
    background-color: #256aff;
  }

  .box {
    position: relative;
    float: left;
    width: 180px;

    media: 1080-;
    width: 16.6666%;

    media: 900-;
    width: 20%;

    media: 720-;
    width: 25%;

    media: 540-;
    width: 33.3333%;

    media: 300-;
    width: 50%;
  }

  .inner {
    position: relative;
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
    /* cursor: pointer; */
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
