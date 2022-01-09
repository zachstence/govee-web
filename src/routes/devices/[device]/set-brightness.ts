import type { RequestHandler } from "@sveltejs/kit";

import { GoveeClient } from "../../../govee";

export const put: RequestHandler = async (request) => {
    const device = request.params.device
    const { model, brightness } = JSON.parse(request.body as string);

    try {
        await GoveeClient.setBrightness(device, model, brightness)
    } catch (e) {
        console.error(e)
    }
}