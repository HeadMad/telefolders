<script>
  
  export let modalWin;
</script>


<h3>Новая папка</h3>
<div class="form">
  <label class="form-row">
    <span class="form-label">Имя папки</span>
    <input class="form-input" style:width="100%" type="text" />
  </label>
  <div class="form-row">
    <!-- <label>
      <input type="checkbox" />
      <span>Открыть папку</span>
    </label> -->
  </div>
  <div class="form-row right">
    <button class="ghost" style:color="tomato" on:click={modalWin.hide}>Закрыть</button>
    <button class="ghost" on:click={modalWin.hide}>OK</button>
  </div>
</div>

<style>
  @import "../../../../../styles/css/.form.css";

  h3 {
    padding: 1.5rem 1.5rem 0;
    margin: 0;
    font-weight: 500;
    font-size: 1.3rem;
  }

  .form {
    padding: 0.75rem 1.5rem 1rem;
  }
</style>
