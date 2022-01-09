import type { GoveeDevice as GoveeTS_GoveeDevice } from "govee-ts/lib/device";

export type GoveeDevice = Omit<GoveeTS_GoveeDevice, "govee" | "getState" | "turnOn" | "turnOff" | "setBrightness" | "setRGBColor" | "setHexColor" | "setColorTemperature">