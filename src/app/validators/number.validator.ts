export const isValidLatitude = (value: any) => {
  return value && value < 90 && value > -90;
}

export const isValidLongitude = (value: any) => {
  return value && value < 180 && value > -180;
}