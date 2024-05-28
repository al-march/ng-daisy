import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent, TabDirective, TabsComponent } from '@ng-daisy/ui';

@Component({
  selector: 'app-page-welcome',
  standalone: true,
  imports: [CommonModule, TabsComponent, TabDirective, BadgeComponent],
  templateUrl: './page-welcome.component.html',
  styleUrl: './page-welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageWelcomeComponent {
  onTabChange(number: number, isChecked: boolean) {
    console.log(number, isChecked);
  }
}
