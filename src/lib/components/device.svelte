<script lang="ts">
    import type { GoveeDevice } from "src/types";

    export let device: GoveeDevice

    let color;

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    
    

    const setColor = async () => {
        const rgb = hexToRgb(color)

        await fetch(`/govee/set-color/${device.device}`, {
            method: "PUT",
            body: JSON.stringify({
                device: device.device,
                model: device.model,
                color: rgb,
            })
        })
    }

</script>


<div>
    {device.name}
    {device.model}

    <input type="color" bind:value={color} />
    <button type="button" on:click={setColor}>Set Color</button>
</div>