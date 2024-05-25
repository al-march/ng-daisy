export const daisyColors = [
  'primary',
  'primary-content',
  'secondary',
  'secondary-content',
  'accent',
  'accent-content',
  'neutral',
  'neutral-content',
  'base-100',
  'base-200',
  'base-300',
  'base-content',
  'info',
  'info-content',
  'success',
  'success-content',
  'warning',
  'warning-content',
  'error',
  'error-content'
] as const;

export const statusColors = [
  'info',
  'success',
  'warning',
  'error'
] as const;

export const mainColors = [
  'primary',
  'secondary',
  'accent'
] as const;

export type DaisyColor = typeof daisyColors[number];
export type StatusColor = typeof statusColors[number];
export type MainColor = typeof mainColors[number];
