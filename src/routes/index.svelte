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
    <table>
        <thead>
            <tr>
                <th style="width: 8rem">Name</th>
                <th style="width: 3rem">Model</th>
                <th style="width: 8rem">Color</th>
                <th style="width: 2rem">Power</th>
                <th>Brightness</th>
                <th>Temperature</th>
            </tr>
        </thead>
        <tbody>
            <Devices devices={devices}/>
        </tbody>
    </table>
</main>


<style>
    table {
        width: 100%;
    }
</style>