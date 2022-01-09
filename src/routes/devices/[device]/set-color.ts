import type { RequestHandler } from "@sveltejs/kit";

import { GoveeClient } from "../../../govee";

export const put: RequestHandler = async (request) => {
    const device = request.params.device
    const { model, color } = JSON.parse(request.body as string);

    try {
        await GoveeClient.setColor(device, model, color)
    } catch (e) {
        console.error(e)
    }
}
