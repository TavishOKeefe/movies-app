import { Routes, RouterModule } from '@angular/router';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ModuleWithProviders }  from '@angular/core';

export const appRoutes: Routes = [
  {
    path: '',
    component: MovieFormComponent
  }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
