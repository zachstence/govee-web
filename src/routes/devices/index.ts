import type { RequestHandler } from "@sveltejs/kit";
import { API_KEY, BASE_URL } from "../../constants";

export const get: RequestHandler = async () => {
    const res = await fetch(`${BASE_URL}/devices`, {
        headers: {
            "Govee-API-Key": API_KEY,
        }
    });
    const json = await res.json()

    return {
        body: json.data.devices
    }
}
