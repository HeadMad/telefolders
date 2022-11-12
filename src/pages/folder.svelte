<script>
  import getFiles from "../lib/getFiles";
  import send from '../lib/send';
  export let path;


  // let filesPromise = getFiles(path);
  let filesPromise = send({
    method: 'getFiles',
    params: [path]
  });
  

</script>

{#await filesPromise}
  Ждём файлы...
{:then files}
  <div class="image-wrap">
    {#if !files.length}
    <h3>В папке пока нет файлов</h3>
    {:else}
      {#each files as file}
        <!-- <pre>{JSON.stringify(file, null, ' ')}</pre> -->
        {#if "type" in file}
          {#if file.type === "photo"}
            <span>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/telefolders.appspot.com/o/{encodeURIComponent(
                  file.thumb
                )}?alt=media"
                alt=""
              />
            </span>
          {/if}
        {/if}
      {/each}
    {/if}
  </div>
{:catch error}
  {error.message}
{/await}

<br />

<style>
  img {
    margin: 10px;
    height: 180px;
    width: 180px;
    object-fit: cover;
  }


  .image-wrap {
    text-align: center;
    /* text-justify: ; */
  }

  pre {
    background-color: aliceblue;
    padding: 10px 20px;
  }
</style>
