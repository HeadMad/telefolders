<script>
  import { outsideClick } from "../../lib";
  export let images = [];
  
  let selectionOrder = images.reduce((akk, img, i) => {
    if (img.isSelected)
      akk.push(i)
    return akk;
  }, []);

  export const unselect = () => {
    images.forEach(img => img.isSelected = false);
    selectionOrder = [];
  }
</script>

<div class="gallery">
  {#each images as image, index}
    <div class="box">
      <div class="inner">
        <div
        class="image"
        class:active={image.isActive}
        class:selected={image.isSelected}
        >
          <img
            src={image.src}
            alt=""
            on:click={() => (image.isActive = true)}
            use:outsideClick={() => (image.isActive = false)}
            />
          </div>
        </div>
        <span
        class="check"
        class:selected={image.isSelected}
        on:click={function() {
          if (image.isSelected) {
            selectionOrder.splice(selectionOrder.indexOf(index), 1);
            selectionOrder = selectionOrder;
            image.isSelected = false;
            // this.innerText = '';
          } else {
            selectionOrder.push(index);
            console.log(selectionOrder);
            // selectionOrder = selectionOrder;
            image.isSelected = true;
            // this.innerText = selectionOrder.find(index);
          }

        }}
      >
      {#if image.isSelected}
        {selectionOrder.indexOf(index) + 1}
      {/if}
  </span>
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
    right: 10px;
    top: 10px;
    cursor: pointer;
    box-sizing: border-box;
    size: 22px;
    border-radius: 50%;
    border: 2px solid #fff;
    background: #00000015;
    color: #fff;
    text-align: center;
    line-height: 22px;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .selected.check {
    border: 0;
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
    position: absolute 4px;
  }

  .image.selected {
    position: absolute 15px;
  }

  .image.active {
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
