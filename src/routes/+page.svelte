<script lang="ts">
  import { dev } from "$app/environment";
  import { preparations, proteins, seasonings, vegetables } from "$lib/data";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import "./styles.css";

  injectAnalytics({ mode: dev ? "development" : "production" });

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
    <div class="flex w-full items-center gap-2">
      <p class="text-xl">
        WTF is for dinner? <button
          class="rounded border border-black/10 px-2 pb-1 pt-0 text-3xl hover:bg-black/10"
          on:click={() => {
            protein = pick(proteins);
            vegetable = pick(vegetables);
            seasoning = pick(seasonings);
            preparation = pick(preparations);
          }}>⟳</button
        >
      </p>
      <div class="group relative ml-auto">
        <div
          class="cursor-help rounded-full border border-black/20 px-2 text-sm hover:bg-black/5"
        >
          ?
        </div>
        <div
          class="pointer-events-none absolute -right-4 top-6 w-72 rounded-lg bg-black p-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100"
        >
          This is like rolling dice for dinner inspiration. It randomly pairs a
          protein, vegetable, preparation method, and seasoning. Not all
          combinations might work perfectly, but they're meant to spark ideas
          when you're tired of cooking the same meals. Cheers!
        </div>
      </div>
    </div>
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
