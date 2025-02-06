<script lang="ts">
  import Bottom from "./parts/Bottom.svelte";
  import Date from "./parts/Date.svelte";
  import Head from "./parts/Head.svelte";
  import Program from "./parts/Program.svelte";
  import simfLabel from "./src/simf-label.svg";

  const pageParts = [Head, Date, Program, Bottom] as const;

  const indexes: number[] = $state([]);

  const checkOpacity = (index: number): "0" | "1" => {
    for (let i = 0; i <= index; i++) {
      if (!indexes.includes(i)) return "0";
    }

    return "1";
  };
</script>

<svelte:head>
  <title>С Рождеством Христовым!</title>
  <link rel="shortcut icon" type="image/ico" href={simfLabel} />
</svelte:head>

<div class="invite">
  {#each pageParts as Component, index}
    <Component
      onLoad={() => indexes.push(index)}
      partStyle={`opacity: ${checkOpacity(index)}`}
    />
  {/each}
</div>

<style lang="scss">
  .invite {
    --stock-width: min(600px, 100dvw);
    background-color: #fefaef;
    min-height: 100dvh;

    :global(> *) {
      transition: opacity 1s;
    }
  }
</style>
