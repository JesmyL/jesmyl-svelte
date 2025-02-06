<script lang="ts">
  import src from "../src/head.svg";
  import type { PagePartProps } from "./model";
  import StockImage from "./StockImage.svelte";

  let { onLoad, partStyle }: PagePartProps = $props();
</script>

<div style={partStyle}>
  <StockImage {onLoad} {src} />
</div>
