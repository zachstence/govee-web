import type { RequestHandler } from "@sveltejs/kit";

import Govee from "govee-ts";
import type { GoveeDevice } from "../../types";

const API_KEY = import.meta.env.VITE_GOVEE_API_KEY as string
const client = new Govee(API_KEY)

export const get: RequestHandler = async (request) => {
    const goveeDevices = await client.getDevices()
    const devices: GoveeDevice[] = goveeDevices.map(
        ({name, model, device, supportCmds, controllable, retrievable}) => 
        ({name, model, device, supportCmds, controllable, retrievable})
    )
    return {
        body: devices
    }
};
