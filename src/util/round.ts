export const round = (n: number, nearest: number): number => {
    return Math.round(n / nearest) * nearest
}