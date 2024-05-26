import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsAppearance, tabsAppearance, TabsComponent } from './tabs.component';
import { TabDirective } from './tab/tab.directive';
import { Component, input, model } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaisySize, daisySizes } from '@ng-daisy/core';

describe('TabsComponent', () => {
  @Component({
    template: `
      <ngd-tabs
        [(active)]="model"
        [size]="size()"
        [appearance]="appearance()"
      >
        @for (tab of tabs(); track tab) {
          <button ngdTab>{{ tab }}</button>
        }
      </ngd-tabs>
    `,
    imports: [
      TabsComponent,
      TabDirective
    ],
    standalone: true
  })
  class TestComponent {
    model = model(0);
    tabs = input([1, 2, 3]);
    size = input<DaisySize>('md');
    appearance = input<TabsAppearance>('');
  }

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const renderedTabsWrapper = (): HTMLElement => fixture.debugElement
    .query(By.css('ngd-tabs'))
    .nativeElement;

  const renderedTabs = (): HTMLButtonElement[] => fixture.debugElement
    .queryAll(By.css('button[ngdTab]'))
    .map(tab => tab.nativeElement);

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all tabs', () => {
    expect(renderedTabs().length).toBe(component.tabs().length);
  });

  it('should update model', () => {
    const model = component.model();
    const [, secondTab] = renderedTabs();
    secondTab.click();
    fixture.detectChanges();

    expect(component.model()).not.toBe(model);
    expect(component.model()).toBe(1);
  });

  it('should set size classes', () => {
    const tabSizeClasses = ['tabs-lg', 'tabs-md', 'tabs-sm', 'tabs-xs'] as const;
    daisySizes.forEach((size, i) => {
      fixture.componentRef.setInput('size', size);
      fixture.detectChanges();
      expect(renderedTabsWrapper().classList.contains(tabSizeClasses[i])).toBeTruthy();
    });
  });

  it('should set appearance', () => {
    tabsAppearance
      .filter(v => !!v)
      .forEach(appearance => {
        fixture.componentRef.setInput('appearance', appearance);
        fixture.detectChanges();
        expect(renderedTabsWrapper().classList.contains(`tabs-${appearance}`));
      });
  });

  it('should has active class', () => {
    fixture.componentRef.setInput('model', 0);
    fixture.detectChanges();
    const [tab] = renderedTabs();

    expect(tab.classList.contains('tab-active')).toBeTruthy();
  });
});
