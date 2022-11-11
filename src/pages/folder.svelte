<script>
  import getFiles from "../lib/getFiles";
  export let path;

  let filesPromise = getFiles(path);

</script>

{#await filesPromise}
  Ждём файлы...
{:then files}
  <div class="image-wrap">
    {#each files as file}
      <!-- <pre>{JSON.stringify(file, null, ' ')}</pre> -->
      {#if "type" in file}
        {#if file.type === "photo"}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/telefolders.appspot.com/o/{encodeURIComponent(
              file.thumb
            )}?alt=media"
            alt=""
          />
        {/if}
      {/if}
    {/each}
  </div>
{:catch error}
  {error.message}
{/await}

<br />

<style>
  img {
    margin: 10px;
    /* height: 180px;
    width: 180px;
    object-fit: cover; */
  }

  /* img:hover {
    object-fit: contain;
  } */

  /* .image-wrap {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  } */

  pre {
    background-color: aliceblue;
    padding: 10px 20px;
  }
</style>
