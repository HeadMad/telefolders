<script>
  import {outsideClick, headroom} from '../lib';
  import  { Gallery } from '../components';
  const images = Array.from(Array(24), (_, i) => ({
    src: `https://picsum.photos/id/${230 + i}/200/320`,
    isActive: false,
    isSelected: false,
  }));

  let gallery;

</script>

<header  use:headroom={{duration: 200}}>
  <button on:click={() => gallery.unselect()}>Uncheck All</button>
  <button>Add Folder</button>
  <button>Share Folder</button>
</header>

<Gallery bind:this={gallery} {images}/>

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
    box-shadow: 0 0 4px 4px rgba(0,0,0,.1);
    text-align: right;
    z-index: 1000;
    width: 100%;
  }
</style>
