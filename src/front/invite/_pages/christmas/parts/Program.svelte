<script lang="ts">
  import alexey from "../src/alexey.png";
  import src from "../src/program.svg";
  import type { PagePartProps } from "./model";
  import StockImage from "./StockImage.svelte";

  let { onLoad, partStyle }: PagePartProps = $props();
</script>

<div class="relative" style={partStyle}>
  <div class="image">
    <StockImage {onLoad} {src} />
  </div>
  <img
    src={alexey}
    class="absolute w-[45%] bottom-[5.4%] left-[27.2%]"
    alt=""
  />
</div>

<style lang="scss">
  .image {
    margin-top: calc(var(--stock-width) / 10);
  }
</style>
