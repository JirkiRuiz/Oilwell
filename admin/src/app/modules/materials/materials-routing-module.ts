import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsCatalogComponent } from './catalog/materials-catalog/materials-catalog.component';
import { AddMaterialCatalogComponent } from './catalog/add-material-catalog/add-material-catalog.component';
import { MaterialsListComponent } from './materials/materials-list/materials-list.component';
import { EditMaterialComponent } from './materials/edit-material/edit-material.component';

const materialesRoutes: Routes = [
    {
        path: '',
        component: MaterialsListComponent
    },
    {
      path: 'agregar-material',
      component: AddMaterialCatalogComponent
    },
    {
      path: 'editar-material',
      component: EditMaterialComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(materialesRoutes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }