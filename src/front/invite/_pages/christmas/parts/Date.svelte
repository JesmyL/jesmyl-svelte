<script lang="ts">
  import church from "../src/church.png";
  import src from "../src/date.svg";
  import type { PagePartProps } from "./model";
  import StockImage from "./StockImage.svelte";

  type Props = PagePartProps;

  let { onLoad, partStyle }: Props = $props();
</script>

<div class="relative" style={partStyle}>
  <div class="image">
    <StockImage {onLoad} {src} />
  </div>
  <img
    src={church}
    class="absolute w-[65.6%] bottom-[6.2%] left-[17.2%]"
    alt=""
  />
</div>

<style>
  .image {
    margin-top: calc(var(--stock-width) / -25);
  }
</style>
