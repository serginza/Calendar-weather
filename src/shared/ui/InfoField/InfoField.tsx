import { InfoFieldContainer } from './InfoField.styles';

export type InfoFieldProps = {
  label: number | string;
  value: number | string | boolean;
  unit?: string;
};

export function InfoField({ label, value, unit }: InfoFieldProps) {
  const spacedUnit = unit === '%' ? unit : ' ' + unit;

  return (
    <InfoFieldContainer>{`${label}: ${value}${spacedUnit}`}</InfoFieldContainer>
  );
}
