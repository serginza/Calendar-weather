import { ADAPTER_NOT_VALUE_TEXTS } from 'shared/constants';

export const isValueExist = <A, B>(
  value: A | undefined | null,
  undefinedText: B
): NonNullable<A> | B => {
  if (value === undefined || value === null || value === '') {
    return undefinedText;
  }

  return value;
};

export const isValueExistStrict = <A>(
  value: A | undefined | null,
  errorText: string
): A | never => {
  if (value === undefined || value === null) {
    throw new Error(errorText);
  }

  return value;
};

export const isEmptyValue = <A>(value: A | undefined | null): A | undefined => {
  if (
    value === undefined ||
    value === null ||
    value === ADAPTER_NOT_VALUE_TEXTS.DASH ||
    value === ADAPTER_NOT_VALUE_TEXTS.UNKNOWN ||
    value === ADAPTER_NOT_VALUE_TEXTS.EMPTY_STRING
  ) {
    return undefined;
  }

  return value;
};
