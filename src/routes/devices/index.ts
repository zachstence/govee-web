import type { RequestHandler } from "@sveltejs/kit";
import { BASE_URL } from "../../constants";

export const get: RequestHandler = async () => {
    const res = await fetch(`${BASE_URL}/devices`, {
        headers: {
            "Govee-API-Key": import.meta.env.VITE_GOVEE_API_KEY as string,
        }
    });
    const json = await res.json()

    return {
        body: json.data.devices
    }
}