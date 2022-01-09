<script lang="ts">
    import type { GoveeDevice } from "src/types";

    export let device: GoveeDevice

    let color: string;
    let power: boolean;
    let brightness: number;

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

        await fetch(`/devices/${device.device}/set-color`, {
            method: "PUT",
            body: JSON.stringify({
                model: device.model,
                color: rgb,
            })
        })
    }

    const setPower = async () => {
        await fetch(`/devices/${device.device}/set-power`, {
            method: "PUT",
            body: JSON.stringify({
                model: device.model,
                power,
            })
        })
    }

    const setBrightness = async () => {
        await fetch(`/devices/${device.device}/set-brightness`, {
            method: "PUT",
            body: JSON.stringify({
                model: device.model,
                brightness,
            })
        })
    }

</script>


<div>
    {device.name}
    {device.model}

    <input type="color" bind:value={color} />
    <button type="button" on:click={setColor}>Set Color</button>
    <input type="checkbox" bind:checked={power} on:change={setPower} />
    <input type="range" min="1" max="100" bind:value={brightness} on:change={setBrightness} />
</div>