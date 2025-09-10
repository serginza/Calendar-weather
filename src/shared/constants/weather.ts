export const kelvinsToCelsius = (temp: number): string => {
  const celsTemp = Math.round(temp - 273.15);
  if (celsTemp > 0) {
    return `+${celsTemp}°`;
  } else if (celsTemp < 0) {
    return `-${celsTemp}°`;
  }

  return `${celsTemp}°`;
};
export const hpaToMmHg = (hpa: number) => Math.round(hpa * 0.7500615);
