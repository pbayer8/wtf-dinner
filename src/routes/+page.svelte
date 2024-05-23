<script lang="ts">
  import { preparations, proteins, seasonings, vegetables } from "$lib/data";
  import "./styles.css";

  const pick = (array: string[]) =>
    array[Math.floor(Math.random() * array.length)];

  let protein = pick(proteins);
  let vegetable = pick(vegetables);
  let seasoning = pick(seasonings);
  let preparation = pick(preparations);
</script>

<main class="flex h-screen w-screen items-center justify-center bg-neutral-200">
  <div
    class="flex w-3/4 flex-col items-start justify-center gap-4 rounded-lg bg-white p-4 shadow-2xl"
  >
    <p class="text-xl">
      WTF is for dinner? <button
        class="rounded px-2 pb-1 pt-0 text-3xl hover:bg-black/10"
        on:click={() => {
          protein = pick(proteins);
          vegetable = pick(vegetables);
          seasoning = pick(seasonings);
          preparation = pick(preparations);
        }}>⟳</button
      >
    </p>
    <p class="text-wrap text-2xl">
      <button
        class="rounded border border-black/10 px-1 pb-1 hover:bg-black/10"
        on:click={() => (protein = pick(proteins))}>{protein}</button
      >
      and
      <button
        class="rounded border border-black/10 px-1 pb-1 lowercase hover:bg-black/10"
        on:click={() => (vegetable = pick(vegetables))}>{vegetable}</button
      >
      <button
        class="rounded border border-black/10 px-1 pb-1 lowercase hover:bg-black/10"
        on:click={() => (preparation = pick(preparations))}
        >{preparation}</button
      >
      with
      <button
        class="rounded border border-black/10 px-1 pb-1 lowercase hover:bg-black/10"
        on:click={() => (seasoning = pick(seasonings))}>{seasoning}</button
      >.
    </p>
  </div>
</main>
