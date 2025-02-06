<script lang="ts">
  import "./app.css";
  import EmptyPage from "./EmptyPage.svelte";
  import InviteApp from "./front/invite/InviteApp.svelte";

  let AppComponent = EmptyPage;

  switch (
    import.meta.env.DEV ? "invite" : window.location.hostname.split(".")[0]
  ) {
    case "invite":
      AppComponent = InviteApp;
      break;
  }
</script>

<AppComponent />
