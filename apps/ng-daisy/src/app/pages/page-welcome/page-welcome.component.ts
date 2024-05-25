import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabDirective, TabsComponent } from '@ng-daisy/ui';

@Component({
  selector: 'app-page-welcome',
  standalone: true,
  imports: [CommonModule, TabsComponent, TabDirective],
  templateUrl: './page-welcome.component.html',
  styleUrl: './page-welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageWelcomeComponent {
  onTabChange(number: number, isChecked: boolean) {
    console.log(number, isChecked);
  }
}
