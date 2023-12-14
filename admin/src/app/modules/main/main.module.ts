import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialsModule } from '../materials/materials.module';
import { MainComponent } from './main/main.component';
import { DashboardModule } from '../dashboard/dashboard.module';

const mainRoutes: Routes = [
  {
    path: '', // Empty path within MainModule
    component: MainComponent, // Load MainComponent for the empty path within MainModule
  },
  // Other routes specific to MainModule if needed
];

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [ MaterialsModule , DashboardModule, RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainModule { }