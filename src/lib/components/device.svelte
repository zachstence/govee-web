<script lang="ts">
    import type { GoveeDevice } from "src/types";
    import { onMount } from "svelte";
import Devices from "./devices.svelte";

    export let device: GoveeDevice

    let loading: boolean = true;
    let color: string = "#FFFFFF";
    let power: boolean;
    let brightness: number;
    let temperature: number;

    onMount(async () => {
        const res = await fetch(`/devices/${device.device}/get-state?model=${device.model}`);
        const state = await res.json()
        // color = state.color // For some reason Govee API isn't returning color
        power = state.powerState === 'on' ? true : false;
        brightness = state.brightness;
        temperature = state.colorTemInKelvin;
        loading = false;
    });

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

    const setTemperature = async () => {
        await fetch(`/devices/${device.device}/set-temperature`, {
            method: "PUT",
            body: JSON.stringify({
                model: device.model,
                temperature,
            })
        })
    }

</script>


<div>
    {#if loading}
        Loading...
    {:else}
        {device.name}
        {device.model}

        <input type="color" bind:value={color} />
        <button type="button" on:click={setColor}>Set Color</button>
        <input type="checkbox" bind:checked={power} on:change={setPower} />
        <input type="range" min="1" max="100" bind:value={brightness} on:change={setBrightness} />
        <input type="range" min="2000" max="9000" bind:value={temperature} on:change={setTemperature} />
    {/if}
</div>