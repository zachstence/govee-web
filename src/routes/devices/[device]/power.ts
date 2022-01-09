import type { RequestHandler } from "@sveltejs/kit";

import { GoveeClient } from "../../../govee";

export const put: RequestHandler = async (request) => {
    const device = request.params.device
    const { model, power } = JSON.parse(request.body as string);

    console.log(device, model, power)

    try {
        await GoveeClient.setPower(device, model, power)
    } catch (e) {
        console.error(e)
    }
}