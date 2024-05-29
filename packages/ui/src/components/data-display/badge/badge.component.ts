import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaisySize } from '@ng-daisy/core';

export const badgeAppearance = [
  'outline',
  ''
] as const;

export type BadgeAppearance = typeof badgeAppearance[number];

export const badgeColors = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'ghost',
  'info',
  'success',
  'warning',
  'error',
  ''
] as const;

export type BadgeColor = typeof badgeColors[number];

@Component({
  selector: '[ngdBadge]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'badge',

    '[class.badge-xs]': 'size() === "xs"',
    '[class.badge-sm]': 'size() === "sm"',
    '[class.badge-md]': 'size() === "md"',
    '[class.badge-lg]': 'size() === "lg"',

    '[class.badge-neutral]': 'color() === "neutral"',
    '[class.badge-primary]': 'color() === "primary"',
    '[class.badge-secondary]': 'color() === "secondary"',
    '[class.badge-accent]': 'color() === "accent"',
    '[class.badge-ghost]': 'color() === "ghost"',
    '[class.badge-info]': 'color() === "info"',
    '[class.badge-success]': 'color() === "success"',
    '[class.badge-warning]': 'color() === "warning"',
    '[class.badge-error]': 'color() === "error"',

    '[class.badge-outline]': 'appearance() === "outline"',
  }
})
export class BadgeComponent {
  size = input<DaisySize>('md');
  appearance = input<BadgeAppearance>('');
  color = input<BadgeColor>('');

}
