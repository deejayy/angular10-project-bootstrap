import { Routes } from '@angular/router';
import { ProjectsComponent } from './page/projects/projects.component';

export const PROJECTS_ROUTES: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    loadChildren: () =>
      import('./projects.module').then((m) => m.ProjectsModule),
  },
];
