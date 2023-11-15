import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsCatalogComponent } from './catalog/materials-catalog/materials-catalog.component';

const materialesRoutes: Routes = [
    {
        path: '',
        component: MaterialsCatalogComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(materialesRoutes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }