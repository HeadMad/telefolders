<script>
  export let marked = false;
  export let half = false;

  export let size = "24";
  export let color = "currentColor";

  import CheckboxBlank from 'svelte-mdi/svg/checkbox-blank-circle-outline.svelte';
  import CheckboxMarkedOutline from 'svelte-mdi/svg/checkbox-marked-circle-outline.svelte';
  import CheckboxMarked from 'svelte-mdi/svg/checkbox-marked-circle.svelte';
</script>



<span on:click class="noselect">
  <svelte:component
  {size}
  {color}
  this={marked ? CheckboxMarked : half ? CheckboxBlank : CheckboxMarkedOutline}
  />
</span>


<style>
  span {
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    cursor: pointer;
  }
</style>