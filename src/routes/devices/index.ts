import type { RequestHandler } from "@sveltejs/kit";

import { GoveeClient } from "../../govee";

export const get: RequestHandler = async () => {
    const goveeDevices = await GoveeClient.getDevices()
    const devices = await Promise.all(goveeDevices.map(
        async ({name, model, device, supportCmds, controllable, retrievable}) => {
            return ({name, model, device, supportCmds, controllable, retrievable})
        }
    ))
    
    return {
        body: devices
    }
};
