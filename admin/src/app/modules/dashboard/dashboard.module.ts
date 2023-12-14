import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const dashboardRoutes: Routes = [
  {
      path: '',
      component: DashboardComponent
  },
];


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(dashboardRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
  