import type { RequestHandler } from "@sveltejs/kit";

import { GoveeClient } from "../../govee";
import type { GoveeDevice } from "../../types";

export const get: RequestHandler = async () => {
    const goveeDevices = await GoveeClient.getDevices()
    const devices: GoveeDevice[] = goveeDevices.map(
        ({name, model, device, supportCmds, controllable, retrievable}) => 
        ({name, model, device, supportCmds, controllable, retrievable})
    )
    return {
        body: devices
    }
};
