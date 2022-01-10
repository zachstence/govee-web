export const BASE_URL = "https://developer-api.govee.com/v1";

export const API_KEY = process.env.GOVEE_API_KEY;

if (!API_KEY) {
    throw new Error("Missing environment variable 'GOVEE_API_KEY'");
}