import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-welcome.component.html',
  styleUrl: './page-welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWelcomeComponent {}
