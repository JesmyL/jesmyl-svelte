<script lang="ts">
  import src from "../src/bottom.svg";
  import type { PagePartProps } from "./model";
  import StockImage from "./StockImage.svelte";

  let { onLoad, partStyle }: PagePartProps = $props();
</script>

<div class="relative flex justify-center" style={partStyle}>
  <div class="image">
    <StockImage {onLoad} {src} />
  </div>
  <a
    aria-label=" "
    href="https://t.me/+cvT_s8GrLZkxYzgy"
    class="absolute w-[31%] h-[8.5%] top-[42%]"
  ></a>
</div>

<style lang="scss">
  .image {
    margin-top: calc(var(--stock-width) / -5);
    margin-bottom: calc(var(--stock-width) / 15);
  }
</style>
