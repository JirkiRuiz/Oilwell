import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { MaterialsCatalogComponent } from './catalog/materials-catalog/materials-catalog.component';
import { AddMaterialCatalogComponent } from './catalog/add-material-catalog/add-material-catalog.component';
import { MaterialsListComponent } from './materials/materials-list/materials-list.component';
import { EditMaterialComponent } from './materials/edit-material/edit-material.component';

const materialesRoutes: Routes = [
    {
        path: '',
        component: MaterialsListComponent,
        canActivate: [AdminGuard],
    },
    {
      path: 'agregar-material',
      component: AddMaterialCatalogComponent,
      canActivate: [AdminGuard],
    },
    {
      path: 'editar-material/:id',
      component: EditMaterialComponent,
      canActivate: [AdminGuard],
    },
];

@NgModule({
  imports: [RouterModule.forChild(materialesRoutes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }