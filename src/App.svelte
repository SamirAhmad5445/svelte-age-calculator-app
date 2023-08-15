<script>
  import { onMount } from "svelte";
  import Input from "./components/Input.svelte";
  import Output from "./components/Output.svelte";
  export let name;
  onMount(() => (document.title = name));
</script>

<main class="app">
  <Input />
  <Output />
</main>

<style>
  .app {
    --size: 46rem;
    --margin: 3rem;
    --padding: 3rem;
    width: min(100% - var(--margin), var(--size));
    margin-inline: auto;
    padding: var(--padding);
    background-color: var(--bg-app);
    border-radius: 2rem 2rem 12rem;
  }
</style>
