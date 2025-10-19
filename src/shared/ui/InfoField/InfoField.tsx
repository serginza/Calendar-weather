import { InfoFieldContainer } from './InfoField.styles';

export type InfoFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  label: number | string;
  value: number | string | boolean;
  unit?: string;
};

export function InfoField({ label, value, unit, ...rest }: InfoFieldProps) {
  const spacedUnit = unit === '%' ? unit : ' ' + unit;

  return (
    <InfoFieldContainer
      {...rest}
    >{`${label}: ${value}${spacedUnit}`}</InfoFieldContainer>
  );
}
