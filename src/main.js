import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Svelte Age Calculator App",
  },
});

export default app;
