import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main/main.component';
import { AdminGuard } from './modules/guards/admin.guard';



const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/admins/admins.module').then((m) => m.AdminsModule),
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
   
  },
  {
    path: 'catalogo',
    component: MainComponent,
    loadChildren: () =>
      import('./modules/materials/materials.module').then(
        (m) => m.MaterialsModule
      ),
    canActivate: [AdminGuard],
  },
  {
    path: 'inicio',
    component: MainComponent,
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AdminGuard],
  },
  { path: '**', redirectTo: '/inicio' } 

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }