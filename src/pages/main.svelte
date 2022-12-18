<script>
  import { onMount } from "svelte";
  import { send } from "../lib";
  import { GalleryBody, GalleryHeader} from "../components";
  import { initWebApp } from "../lib/TelegramWebApp.js";



  const WebApp = initWebApp();
  const { BackButton, MainButton } = WebApp;

  MainButton.setParams({
    text: "Главная кнопка",
    is_visible: false,
    is_active: true,
  });

  MainButton.onClick(() => {
    MainButton.showProgress();
    MainButton.setText("Загружаю");
    setTimeout(() => {
      MainButton.hideProgress();
      MainButton.setText("Главная кнопка");
    }, 2000);
  });
  
  const foldersList = send("foldersList");
  const folderItems = send("gallery");
  let gallery;
  let selectedCount;
  let allSelected;


  function clickFolder({ detail: folder }) {
    WebApp.expand();
    if (BackButton.isVisible) BackButton.hide();
    else BackButton.show();
  }

  onMount(() => {
    WebApp.ready();
  });
</script>


<GalleryHeader  folders={foldersList}/>
<GalleryBody
  items={folderItems}
  bind:this={gallery}
  bind:selectedCount
  bind:allSelected
  on:clickFolder={clickFolder}
/>


