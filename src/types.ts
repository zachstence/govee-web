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
    device: string;
    model: string;
    deviceName: string;
    state: DeviceState;
}
