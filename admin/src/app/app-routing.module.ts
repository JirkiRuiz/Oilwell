import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent, // Assuming 'MainComponent' has its own <router-outlet>
    children: [
      {
        path: 'catalogo',
        loadChildren: () =>
          import('./modules/materials/materials.module').then(
            (m) => m.MaterialsModule
          ),
      },
      {
        path: 'inicio',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      // Other child routes for MainComponent if needed
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }