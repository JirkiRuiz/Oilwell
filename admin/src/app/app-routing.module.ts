import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main/main.component';
import { AdminGuard } from './modules/guards/admin.guard';


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
          canActivate: [AdminGuard],
      },
   
      {
        path: 'inicio',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
          canActivate: [AdminGuard],
      },
      // Other child routes for MainComponent if needed
    ],
    },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/admins/admins.module').then(
        (m) => m.AdminsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }