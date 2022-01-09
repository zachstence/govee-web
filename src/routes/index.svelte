<script lang="ts" context="module">
    import Devices from "$lib/components/devices.svelte";
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ fetch }) => {
        const devices = await fetch("/devices")
        const json = await devices.json()
        return {
            props: {
                devices: json
            }
        }
    }
</script>


<script lang="ts">
    import type { GoveeDevice } from "src/types";

    export let devices: GoveeDevice[]
</script>


<main>
    <Devices devices={devices}/>
</main>