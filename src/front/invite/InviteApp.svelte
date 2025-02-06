<script lang="ts">
  import Router from "svelte-spa-router";
  import Christmas from "./_pages/christmas/Christmas.svelte";

  const routes = {
    "/christmas": Christmas,
  };
</script>

<Router {routes} />
