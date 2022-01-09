import type { RequestHandler } from "@sveltejs/kit";

import { GoveeClient } from "../../../govee";

export const put: RequestHandler = async (request) => {
    const { device, model, color } = JSON.parse(request.body as string);

    try {
        const res = await GoveeClient.setColor(device, model, color)
        console.log(res)
    } catch (e) {
        console.error(e)
    }
}