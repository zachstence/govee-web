import type { Rgb } from "src/types";

const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/

export const hexToRgb = (hex?: string): Rgb | null => {
    if (!hex) return null;
    
    const match = HEX_REGEX.exec(hex);
    return match ? {
        r: parseInt(match[1], 16),
        g: parseInt(match[2], 16),
        b: parseInt(match[3], 16)
    } : null;
}

const decToHex = (x: number): string => {
    const hex = x.toString(16);
    return hex.padStart(2, "0");
}

export const rgbToHex = (rgb?: Rgb): string | null => {
    if (!rgb) return null;
    const {r, g, b} = rgb;
    return `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`;
}