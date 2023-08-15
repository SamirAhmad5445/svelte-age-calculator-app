<button class="btn">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="46"
    height="44"
    viewBox="0 0 46 44"
    ><g fill="none" stroke="#FFF" stroke-width="2"
      ><path
        d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"
      /></g
    ></svg
  >
</button>

<style>
  .btn {
    position: absolute;
    right: 0;
    bottom: 0;
    translate: 0 50%;
    width: fit-content;
    background-color: var(--bg-accent);
    border: 0;
    border-radius: 50%;
    padding: 1.25rem;
    outline-offset: 0;
    transition: background-color 150ms ease-out, outline-offset 150ms ease-out;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    box-shadow: none;
  }
  .btn:is(:hover, :focus-visible) {
    background-color: var(--text-body);
  }
  .btn:focus-visible {
    outline: 0.25rem solid var(--text-accent);
    outline-offset: 0.125rem;
  }
  @media (max-width: 40rem) {
    .btn {
      transform: translateX(-50%);
      left: 50%;
    }
  }
</style>
