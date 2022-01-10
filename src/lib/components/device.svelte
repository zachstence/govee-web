<script lang="ts">
    import { onMount } from "svelte";
    import Slider from "@smui/slider"
    import Switch from "@smui/switch"

    import type { GoveeDevice } from "../../types";
    import { hexToRgb, rgbToHex } from "../../util/color";
    import { round } from "../../util/round";


    export let device: GoveeDevice

    let loading: boolean = true;
    let color: string = "#FFFFFF";
    let power: boolean;
    let brightness: number = 50;
    let temperature: number = 4000;

    onMount(async () => {
        const res = await fetch(`/devices/${device.device}/state?model=${device.model}`);
        const state = await res.json()
        color = rgbToHex(state.color)
        power = state.powerState === 'on' ? true : false;
        brightness = state.brightness ? state.brightness : 50;
        temperature = state.colorTem ? round(state.colorTem, 100) : 4000;
        loading = false;
    });

    const setColor = async () => {
        const rgb = hexToRgb(color)

        await fetch(`/devices/${device.device}/color`, {
            method: "PUT",
            body: JSON.stringify({
                model: device.model,
                color: rgb,
            })
        })
    }

    const setPower = async () => {
        await fetch(`/devices/${device.device}/power`, {
            method: "PUT",
            body: JSON.stringify({
                model: device.model,
                power,
            })
        })
    }

    const setBrightness = async () => {
        await fetch(`/devices/${device.device}/brightness`, {
            method: "PUT",
            body: JSON.stringify({
                model: device.model,
                brightness,
            })
        })
    }

    const setTemperature = async () => {
        await fetch(`/devices/${device.device}/temperature`, {
            method: "PUT",
            body: JSON.stringify({
                model: device.model,
                temperature,
            })
        })
    }

</script>


{#if loading}
    Loading...
{:else}
    <tr>
        <td>{device.deviceName}</td>
        <td>{device.model}</td>

        <td>
            <input type="color" bind:value={color} />
            <button type="button" on:click={setColor}>Set Color</button>
        </td>

        <td>
            <Switch bind:checked={power} on:SMUISwitch:change={setPower} />
        </td>

        <td>
            {#if brightness}
                <Slider bind:value={brightness} min={1} max={100} step={1} discrete on:SMUISlider:change={setBrightness} />
            {/if}
        </td>

        <td>
            {#if temperature}
                <Slider bind:value={temperature} min={2000} max={9000} step={100} discrete on:SMUISlider:change={setTemperature} />
            {/if}
        </td>
        
    </tr>
{/if}
