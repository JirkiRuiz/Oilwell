import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsCatalogComponent } from './catalog/materials-catalog/materials-catalog.component';
import { AddMaterialCatalogComponent } from './catalog/add-material-catalog/add-material-catalog.component';
import { MaterialsRoutingModule } from './materials-routing-module';

@NgModule({
  declarations: [
    MaterialsCatalogComponent,
    AddMaterialCatalogComponent
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule
  ]
})
export class MaterialsModule { }