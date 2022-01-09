import type { RequestHandler } from "@sveltejs/kit";
import { GoveeClient } from "../../../govee";

export const get: RequestHandler = async (request) => {
    const { device } = request.params;
    const model = request.url.searchParams.get("model");

    try {
        const res = await GoveeClient.getState(device, model)
        const state = res.data.properties.reduce((acc, v) => Object.assign(acc, v), {})
        return {
            body: JSON.stringify(state)
        }
    } catch (e) {
        console.error(e)
    }
};
