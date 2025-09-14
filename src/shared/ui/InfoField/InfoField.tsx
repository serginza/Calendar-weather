export type InfoFieldProps = {
  label: number | string;
  value: number | string | boolean;
};

export function InfoField({ label, value }: InfoFieldProps) {
  return <div>{`${label}: ${value}`}</div>;
}
