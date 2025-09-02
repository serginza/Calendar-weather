import { memo } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
} from '@mui/material';

export type CheckboxElementProps<T extends FieldValues> = Omit<
  CheckboxProps,
  'name' | 'onChange'
> & {
  name: Path<T>;
  label?: FormControlLabelProps['label'];
  control?: Control<T>;
  required?: boolean;
};

function CheckboxElementProto<TFieldValues extends FieldValues>({
  name,
  label,
  control,
  required,
  ...rest
}: CheckboxElementProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { invalid } }) => {
        return (
          <FormControl required={required} error={invalid}>
            <FormControlLabel
              label={label || ''}
              control={
                <Checkbox
                  {...rest}
                  color={rest.color || 'primary'}
                  sx={{
                    ...rest.sx,
                    color: invalid ? 'error.main' : undefined,
                  }}
                  value={value}
                  checked={!!value}
                  onChange={onChange}
                />
              }
            />
          </FormControl>
        );
      }}
    />
  );
}

export const CheckboxElement = memo(CheckboxElementProto);
