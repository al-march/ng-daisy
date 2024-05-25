export const daisySizes = [
  'lg',
  'md',
  'sm',
  'xs',
] as const;

export type DaisySize = typeof daisySizes[number];
