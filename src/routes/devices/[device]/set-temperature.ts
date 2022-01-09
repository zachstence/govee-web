import type { RequestHandler } from "@sveltejs/kit";

import { GoveeClient } from "../../../govee";

export const put: RequestHandler = async (request) => {
    console.log(request)
    const device = request.params.device
    const { model, temperature } = JSON.parse(request.body as string);

    try {
        await GoveeClient.setTemperature(device, model, temperature)
    } catch (e) {
        console.error(e)
    }
}
