<script>
    import { initWebApp } from "./lib/TelegramWebApp.js";
    import { Alert, Modal } from "./components";
    import { error } from "./lib/store";
    import { onMount } from "svelte";
    import route from "./lib/route";
    // import "../public/styles.css";
    // import pico from '@picocss/pico';
    import  './styles';
    // import  './styles/inputs.css';
    // import  './styles/radiocheckboxes.css';


    let alert;
    let dynamicPage = null;
    const { page, params } = route(window.location.pathname);
    
    error.subscribe((err) => alert && err && alert.show(err, 1000));

    onMount(async () => {
        try {
            dynamicPage = (await import(`./pages/${page}.svelte`)).default;
            initWebApp().ready();
        } catch (err) {
            error.set(err);
        }
    });
</script>


<svelte:component this={dynamicPage} {...params} />

<Alert bind:this={alert} />
