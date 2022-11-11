<script>
    import { onMount } from 'svelte'
    import route from './lib/route';
  
  const {page, params} = route(window.location.pathname);
  let dynamicPage = null;

  onMount(async () => {
      try {
          dynamicPage = (await import(`./pages/${page}.svelte`)).default
      } catch (e) {
          // Handle errors if the dynamic route doesn't load:
          console.log(e.message)
      }
  })
</script>
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contacts">Contacts</a>
    <a href="/faq">FAQ</a>
</nav>

<svelte:component {...params} this={dynamicPage} />