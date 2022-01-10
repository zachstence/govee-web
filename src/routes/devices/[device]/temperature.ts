import type { RequestHandler } from "@sveltejs/kit";
import { API_KEY, BASE_URL } from "../../../constants";

export const put: RequestHandler = async (request) => {
    const device = request.params.device
    const { model, temperature } = JSON.parse(request.body as string);

    await fetch(`${BASE_URL}/devices/control`, {
        method: "PUT",
        headers: {
            "Govee-API-Key": API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            device,
            model,
            cmd: {
                name: "colorTem",
                value: temperature
            }
        })
    })
}