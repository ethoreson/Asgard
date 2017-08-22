import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { MidgardComponent } from './midgard/midgard.component';
import { AlfheimComponent } from './alfheim/alfheim.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'midgard',
    component: MidgardComponent
  },
  {
    path: 'alfheim',
    component: AlfheimComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
