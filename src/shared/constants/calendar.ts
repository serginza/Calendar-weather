export const WEEK_DAYS = [
  'Mon',
  'Thu',
  'Wed',
  'Thr',
  'Fri',
  'Sat',
  'Sun',
] as const;

export const MONTHS = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
] as const;

export const DATE = new Date();
export const CURRENT_DAY = DATE.getDate();
export const CURRENT_MONTH = DATE.getMonth();
export const CURRENT_YEAR = DATE.getFullYear();
