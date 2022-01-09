<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ fetch }) => {
        const res = await fetch("/test")
        const json = await res.json()
        return {
            props: {
                apiKey: json.apiKey
            }
        }
    }
</script>

<script lang="ts">
    export let apiKey: string
</script>


<main>
    {apiKey}
</main>