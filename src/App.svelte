<script>
    import { initWebApp } from "./lib/TelegramWebApp.js";
    import { Alert, Modal, TestButtons } from "./components";
    import { error, modal } from "./lib/store";
    import { onMount } from "svelte";
    import route from "./lib/route";

    let alert;
    let modalWin;
    let dynamicPage = null;
    const { page, params } = route(window.location.pathname);

    error.subscribe((err) => alert && err && alert.show(err, 1000));
    modal.subscribe(() => modalWin && modalWin.open());

    onMount(async () => {
        try {
            dynamicPage = (await import(`./pages/${page}.svelte`)).default;
            initWebApp().ready();
        } catch (err) {
            error.set(err);
        }
    });

    if (
        globalThis?.Telegram?.WebApp?.themeParams &&
        Object.keys(globalThis?.Telegram?.WebApp?.themeParams).length
    ) {

        // --primary-color: #52a8eb;
        // --primary-transparent-color: #52a8eb33;
        // --primary-dark-color: #3b9de8;
        // --primary-inverse-color: #fff;
        // --secondary-color: #60ace2;
        
        // --bg-color: #1d2834;
        // --bg-secondary-color: #151f28;
        // --text-color: #ffffff;
        // --hint-text-color: #636e7a;
        const params = globalThis.Telegram.WebApp.themeParams;
        document.documentElement.style.cssText = document.documentElement.style.cssText + `
        --primary-color: ${params.button_color};
        --primary-transparent-color: ${params.button_color}33;
        --primary-dark-color: ${params.link_color};
        --primary-inverse-color: ${params.button_text_color};
        --secondary-color: ${params.link_color};
        --bg-color: ${params.bg_color};
        --bg-secondary-color: ${params.secondary_bg_color};
        --text-color: ${params.text_color};
        --text-hint-color: ${params.hint_color};
        --viewport-height: var(--tg-viewport-height, 100vh);
        `;
    }

</script>
<TestButtons/>
<svelte:component this={dynamicPage} {...params} />

<Modal bind:this={modalWin}>
    {#await $modal}
        <div style="padding: 1rem; text-align: center;">Загрузка...</div>
    {:then {default: modalContent}} 
        <svelte:component this={modalContent} {modalWin} />
    {/await}
</Modal> 
<Alert bind:this={alert} />

<style>
    @import '../../styles/styles.css';
    :global(body) {
        background-color: var(--bg-color);
    }
</style>
