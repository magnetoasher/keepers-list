export const maskId = (id: string) => {
  const masked = id.slice(0, 6) + '...' + id.slice(-4)
  return masked
}

export enum Color {
  GREEN = '#C0FB50',
  RED = '#EE2233',
}
