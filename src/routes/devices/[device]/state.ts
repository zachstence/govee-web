import type { RequestHandler } from "@sveltejs/kit";
import type { DeviceState } from "src/types";
import { GoveeClient } from "../../../govee";

export const get: RequestHandler = async (request) => {
    const { device } = request.params;
    const model = request.url.searchParams.get("model");

    try {
        const res = await GoveeClient.getState(device, model)
        const state = res.data;
        
        const body = state.properties.reduce((acc, v) => Object.assign(acc, v), {}) as DeviceState;
        // @ts-expect-error This will be on the response
        delete body.colorTemInKelvin

        return { body: JSON.stringify(body) }
    } catch (e) {
        console.error(e)
    }
};
