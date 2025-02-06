<script lang="ts">
  import type { StockImageProps } from "./model";

  let { onLoad, src, className }: StockImageProps = $props();
</script>

<img {src} alt="" class={className} onload={onLoad} />

<style lang="scss"></style>
