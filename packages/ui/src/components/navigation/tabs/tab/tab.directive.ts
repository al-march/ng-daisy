import { computed, Directive, effect, HostListener, inject, model, signal } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Directive({
  selector: 'a[ngdTab], button[ngdTab]',
  standalone: true,
  host: {
    'role': 'tab',
    'tabindex': '0',
    'class': 'tab',
    '[class.tab-active]': 'checked()'
  }
})
export class TabDirective {
  parent = inject(TabsComponent);

  active = model(false);
  tabIndex = signal(-1);

  checked = computed(() => {
    return this.parent.active() === this.tabIndex();
  });

  constructor() {
    effect(() => {
      this.active.set(this.checked());
    }, { allowSignalWrites: true });
  }

  @HostListener('click')
  onTabClicked() {
    this.parent.onTabSelect(this.tabIndex());
  }
}
