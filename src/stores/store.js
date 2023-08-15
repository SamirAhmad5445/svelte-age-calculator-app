import { writable } from "svelte/store";

export let age = writable({
  year: undefined,
  month: undefined,
  day: undefined,
});
