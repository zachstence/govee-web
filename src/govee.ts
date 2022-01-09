import Govee from "govee-ts"

export const GoveeClient = new Govee(import.meta.env.VITE_GOVEE_API_KEY as string)
