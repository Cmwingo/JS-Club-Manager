import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClubListComponent } from './club-list/club-list.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members',
    component: ClubListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
