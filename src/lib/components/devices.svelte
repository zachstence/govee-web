<script lang="ts">
    import type { GoveeDevice } from "src/types";
    import Device from "./device.svelte";

    export let devices: GoveeDevice[]
</script>


{#each devices as device}
    <Device device={device} />
{/each}
