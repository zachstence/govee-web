import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = (request) => {
    const apiKey = import.meta.env.VITE_GOVEE_API_KEY
    return {
        body: { apiKey }
    };
};
