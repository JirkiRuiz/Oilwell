import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsCatalogComponent } from './catalog/materials-catalog/materials-catalog.component';
import { AddMaterialCatalogComponent } from './catalog/add-material-catalog/add-material-catalog.component';
import { MaterialsRoutingModule } from './materials-routing-module';
import { MaterialsListComponent } from './materials/materials-list/materials-list.component';
import { AddMaterialComponent } from './materials/add-material/add-material.component';
import { EditMaterialComponent } from './materials/edit-material/edit-material.component';

@NgModule({
  declarations: [
    MaterialsCatalogComponent,
    AddMaterialCatalogComponent,
    MaterialsListComponent,
    AddMaterialComponent,
    EditMaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule
  ]
})
export class MaterialsModule { }