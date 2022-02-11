import { readFileSync } from "fs";

export const BASE_URL = "https://developer-api.govee.com/v1";

let apiKey: string;
try {
    apiKey = readFileSync("./secret/govee-api-key.txt").toString();
} catch {
    console.error("Missing required secret govee-api-key.txt");
    process.exit(1);
}
export const API_KEY = apiKey;
