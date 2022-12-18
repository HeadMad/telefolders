<script>
  import { onMount } from "svelte";

  import {  getFolder, createNewFolder, emitSend, send } from "../lib";
  import { GalleryBody, GalleryHeader, Modal, TestButtons } from "../components";
  import { initWebApp, sendWebAppQuery } from "../lib/TelegramWebApp.js";

  export let path = "";
  export let id;

  const rawData =
    "query_id=AAGMQIwNAAAAAIxAjA1oOzrg&user=%7B%22id%22%3A227295372%2C%22first_name%22%3A%22%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB%22%2C%22last_name%22%3A%22%D0%9A%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE%22%2C%22username%22%3A%22HeadMad%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D&auth_date=1669869337&hash=d8cd14a4e49021d8227bb06f1c6c8b1f9ab5e729c0379fd110847eb8e4fa32c4";

  const WebApp = initWebApp();
  const { BackButton, MainButton } = WebApp;

  // MainButton.setParams({
  //   text: "Главная кнопка",
  //   is_visible: false,
  //   is_active: true,
  // });

  // MainButton.onClick(() => {
  //   MainButton.showProgress();
  //   MainButton.setText("Загружаю");
  //   setTimeout(() => {
  //     MainButton.hideProgress();
  //     MainButton.setText("Главная кнопка");
  //   }, 2000);
  // });
  let folderData;
  if (localStorage[id]) folderData = JSON.parse(localStorage[id]).data;
  // getFolder(rawData, path, id).then((response) => (folderData = response));
  emitSend(rawData, path, id).then((response) => (folderData = response));
  
  
  let modal;
  let gallery;
  let selectedCount;
  let allSelected;

  function clickFolder({ detail: folder }) {
    WebApp.expand();
    if (BackButton.isVisible) BackButton.hide();
    else BackButton.show();
  }

  function onPlusClick() {
    modal.show();
  }

  WebApp.ready();
  onMount(() => {
  });



</script>

{#if !folderData}
  Загрузка...
{:else}
  <GalleryHeader
  name={folderData.folder.name}
  on:plusClick={onPlusClick}
  />
<TestButtons/>
  <GalleryBody
    items={folderData.childs}
    bind:this={gallery}
    bind:selectedCount
    bind:allSelected
    on:clickFolder={clickFolder}
  />
{/if}



  <div data-theme="">
    <Modal bind:this={modal} title="Новая папка">
      <label class="form-row">
        <span class="form-label">Имя папки</span>
        <input class="form-input block" type="text">
      </label>
      <div class="form-row">
        <label>
          <input type="checkbox">
          <span>Открыть папку</span>
        </label>
      </div>
      <div class="form-row right">
    
        <button class="ghost" on:click={modal.hide}>Закрыть</button>
        <button class="ghost" on:click={modal.hide}>OK</button>
      </div>
    </Modal>
  </div>
  
