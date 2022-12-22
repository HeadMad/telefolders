<script>
    import { initWebApp } from "./lib/TelegramWebApp.js";
    import { Alert, Modal } from "./components";
    import { error, modal } from "./lib/store";
    import { onMount } from "svelte";
    import route from "./lib/route";
    // import "./styles/test.css";

    let alert;
    let modalWin;
    let dynamicPage = null;
    const { page, params } = route(window.location.pathname);

    error.subscribe((err) => alert && err && alert.show(err, 1000));
    modal.subscribe(() => modalWin && modalWin.show());

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
        const params = globalThis.Telegram.WebApp.themeParams;
        document.documentElement.style.cssText = document.documentElement.style.cssText + `
        --theme-primary-color: ${params.button_color};
        --theme-primary-focus-color: ${params.button_color}33;
        --theme-primary-hover-color: ${params.link_color};
        --theme-primary-inverse-color: ${params.button_text_color};
        --theme-secondary-color: ${params.link_color};
        --theme-text-color: ${params.text_color};
        --theme-bg-color: ${params.bg_color};
        --theme-bg-secondary-color: ${params.secondary_bg_color};
        --theme-hint-color: ${params.hint_color};
        --theme-viewport-height: var(--tg-viewport-height, 100vh);
        `;
    }

</script>
<svelte:component this={dynamicPage} {...params} />

<Modal bind:this={modalWin}>
        <svelte:component this={$modal} {modalWin} />
</Modal> 
<Alert bind:this={alert} />

<style>
    @import './styles/styles.css';
</style>
