import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { AdminGuard } from '../guards/admin.guard';

const adminsRoutes: Routes = [
    {
        path:'',
        component: LoginComponent,
        // canActivate: [AdminGuard],
    },
 
];

@NgModule({
  imports: [RouterModule.forChild(adminsRoutes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }