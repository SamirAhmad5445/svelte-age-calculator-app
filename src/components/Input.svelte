<script>
  import { age } from "../stores/store";
  import Button from "./Button.svelte";
  const inputs = [
    { id: "day", placeHolder: "dd", label: "day" },
    { id: "month", placeHolder: "mm", label: "month" },
    { id: "year", placeHolder: "yyyy", label: "year" },
  ];
  const handleAgeInput = (e) => {
    const inputData = `${e.target.month.value} ${e.target.day.value} ${e.target.year.value}`;
    const curr = new Date();
    const bd = new Date(inputData);
    $age = {
      year: curr.getFullYear() - bd.getFullYear(),
      month: curr.getMonth() - bd.getMonth() + ($age.day > 0 ? 1 : 0),
      day: curr.getDate() - bd.getDate() + 1,
    };
  };
</script>

<form class="input-fields" on:submit|preventDefault={handleAgeInput}>
  {#each inputs as input (input.id)}
    <label class="field">
      <span class="label">{input.label}</span>
      <input
        type="number"
        name={input.id}
        id={input.id}
        placeholder={input.placeHolder}
      />
    </label>
  {/each}
  <Button />
</form>

<style>
  .input-fields {
    --form-spacer: 3.25rem;
    position: relative;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    border-bottom: 0.0625rem solid var(--text-muted);
    padding-block-end: var(--form-spacer);
    margin-block-end: var(--form-spacer);
    color: var(--text-muted);
    font-size: 0.875rem;
    letter-spacing: 0.125rem;
  }
  .input-fields .field > * {
    display: block;
    max-width: 100%;
  }
  .input-fields input {
    --max-width: 9rem;
    --min-width: 6rem;
    width: clamp(var(--min-width), 18dvw, var(--max-width));
    font-size: 2rem;
    border: 0.0625rem solid var(--text-muted);
    border-radius: 0.5rem;
    text-transform: uppercase;
    padding: 0.25rem 1rem;
    caret-color: var(--text-accent);
  }
  .input-fields input:is(:focus) {
    border: 0.0625rem solid var(--text-accent);
    outline: transparent;
  }
  @media (max-width: 40rem) {
    .input-fields {
      --form-spacer: 6.5rem;
    }
    .input-fields input {
      --min-width: 7.5rem;
      flex: 1;
    }
  }
</style>
