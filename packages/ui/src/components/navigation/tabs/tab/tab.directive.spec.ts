import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabDirective } from './tab.directive';

describe('TabComponent', () => {
  let component: TabDirective;
  let fixture: ComponentFixture<TabDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TabDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
