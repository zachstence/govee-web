<script lang="ts">
    import type { GoveeDevice } from "src/types";

    export let device: GoveeDevice
</script>


<div>
    {device.name}
    {device.model}
</div>