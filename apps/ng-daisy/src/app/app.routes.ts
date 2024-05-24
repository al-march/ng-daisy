import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Welcome',
    loadComponent: () => import('./pages/page-welcome/page-welcome.component')
      .then(c => c.PageWelcomeComponent)
  }
];
