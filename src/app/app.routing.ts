import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { Clock }        from './ClockDirective';
import { choose_city }        from './ChooseCityDirective';

const appRoutes: Routes = [
  { path: 'clock', component: Clock },
  { path: 'choose-city', component: choose_city },
  { path: '', redirectTo: '/clock', pathMatch: 'full' },
  { path: '**', component: Clock }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
