export interface Rgb {
    r: number;
    g: number;
    b: number;
}

export interface DeviceState {
    online: boolean;
    power: boolean;
    brightness: number;
    color?: string
    colorTem?: number;
}

export interface GoveeDevice {
    name: string;
    model: string;
    device: string;
    state: DeviceState;
}