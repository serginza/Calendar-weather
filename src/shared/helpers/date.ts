import { parse, format } from 'date-fns';

export function convertToIsoString(
  dateString: string,
  frontFormat: string
): string {
  const parsedDate = parse(dateString, frontFormat, new Date());

  return format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
}
