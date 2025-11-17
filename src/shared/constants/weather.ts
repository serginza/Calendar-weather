export const formatTemp = (temp: number): string | number => {
  const roundedTemp = Math.round(temp);

  if (roundedTemp > 0) return `+${roundedTemp}`;

  return roundedTemp;
};

export const hpaToMmHg = (hpa: number) => Math.round(hpa * 0.7500615);
