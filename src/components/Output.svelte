<script>
  import { age } from "../stores/store.js";
  let data = ["year", "month", "day"];
</script>

<div class="output">
  {#each data as item}
    <p>
      <span id={`output-${item}`}>
        {#if !isNaN($age[item])}
          {Math.abs($age[item])}
        {:else}
          --
        {/if}
      </span>
      {item}s
    </p>
  {/each}
</div>

<style>
  .output {
    font-size: 4.5rem;
    font-weight: var(--fw-bolder);
    font-style: italic;
    line-height: 1.25;
  }
  .output span {
    color: var(--text-accent);
  }
</style>
