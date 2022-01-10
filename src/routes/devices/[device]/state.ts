import type { RequestHandler } from "@sveltejs/kit";
import { API_KEY, BASE_URL } from "../../../constants";

export const get: RequestHandler = async (request) => {
    const { device } = request.params;
    const model = request.url.searchParams.get("model");

    const res = await fetch(`${BASE_URL}/devices/state?device=${device}&model=${model}`, {
        headers: {
            "Govee-API-Key": API_KEY,
            "Content-Type": "application/json",
        },
    })
    const json = await res.json()

    const body = json.data.properties.reduce((acc, v) => Object.assign(acc, v), {});
    return {
        body: JSON.stringify(body)
    }
}