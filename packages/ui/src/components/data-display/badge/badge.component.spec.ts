import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeAppearance, BadgeColor, BadgeComponent, badgeAppearance, badgeColors } from './badge.component';
import { Component, input } from '@angular/core';
import { DaisySize, daisySizes } from '@ng-daisy/core';

describe('BadgeComponent', () => {
  @Component({
    template: `
      <div ngdBadge [size]="size()" [appearance]="appearance()" [color]="color()">+99</div>
    `,
    standalone: true,
    imports: [BadgeComponent]
  })
  class TestComponent {
    size = input<DaisySize>('md');
    appearance = input<BadgeAppearance>('');
    color = input<BadgeColor>('');
  }

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const badge = (): HTMLElement => document.querySelector('div[ngdBadge]')!;

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set size classes', () => {
    daisySizes.forEach(size => {
      fixture.componentRef.setInput("size", size)
      fixture.detectChanges();

      expect(badge().classList.contains(`badge-${size}`)).toBeTruthy();
    })
  })
  it('should set color classes', () => {
    badgeColors
      .filter(v => v)
      .forEach(color => {
        fixture.componentRef.setInput("color", color)
        fixture.detectChanges();

        expect(badge().classList.contains(`badge-${color}`)).toBeTruthy();
      })
  })
  it('should set appearance classes', () => {
    badgeAppearance
      .filter(v => v)
      .forEach(appearance => {
        fixture.componentRef.setInput("appearance", appearance)
        fixture.detectChanges();

        expect(badge().classList.contains(`badge-${appearance}`)).toBeTruthy();
      })
  })
});
