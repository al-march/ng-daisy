import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  input,
  model
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaisySize } from '@ng-daisy/core';
import { TabDirective } from './tab/tab.directive';

export const tabsAppearance = [
  'bordered',
  'lifted',
  'boxed',
  ''
] as const;

export type TabsAppearance = typeof tabsAppearance[number];

@Component({
  selector: 'ngd-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'tabs',
    'role': 'tablist',

    '[class.tabs-xs]': 'size() === "xs"',
    '[class.tabs-sm]': 'size() === "sm"',
    '[class.tabs-md]': 'size() === "md"',
    '[class.tabs-lg]': 'size() === "lg"',

    '[class.tabs-bordered]': 'appearance() === "bordered"',
    '[class.tabs-lifted]': 'appearance() === "lifted"',
    '[class.tabs-boxed]': 'appearance() === "boxed"'
  }
})
export class TabsComponent implements AfterViewInit {
  size = input<DaisySize>('md');
  appearance = input<TabsAppearance>('');
  active = model(-1);

  tabs = contentChildren(TabDirective);

  /**
   * Active is valid if it >= 0 and points on a tab
   */
  protected readonly isActiveValueValid = computed(() => {
    return this.active() >= 0 && this.tabs().length >= this.active();
  });

  ngAfterViewInit() {
    this.initTabs();
  }

  protected initTabs() {
    let checkedIndex = 0;
    this.tabs().forEach((tab, i) => {
      if (tab.active()) {
        checkedIndex = i;
      }
      tab.tabIndex.set(i);
    });

    /**
     * Set the active if invalid.
     * It'll be 0 or the last checked tab
     */
    if (!this.isActiveValueValid()) {
      this.active.set(checkedIndex);
    }
  }

  onTabSelect(tabIndex: number) {
    this.active.set(tabIndex);
  }
}
