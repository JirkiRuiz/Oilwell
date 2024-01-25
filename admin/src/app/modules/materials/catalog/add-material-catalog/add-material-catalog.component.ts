import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialsService } from 'src/app/services/materials.service';



@Component({
  selector: 'app-add-material-catalog',
  templateUrl: './add-material-catalog.component.html',
  styleUrls: ['./add-material-catalog.component.css']
})
export class AddMaterialCatalogComponent implements OnInit {
  material: any;

  public categorias: Array<any> = [];

  constructor(
    private _router:Router,
    private _materialsService : MaterialsService,
  ){

  }

  ngOnInit(): void {
    this.material = {};
    this._materialsService.listar_categorias().subscribe(
      response=>{
        this.categorias = response.data;

       
      },
      error=>{
        console.log(error)
      })
  }

  registro(registroForm: any ){
    if(registroForm.valid){
      this._materialsService.registro_materiales_admin(this.material).subscribe(response => {
        alert("Se registro con exito");
        this._router.navigate(['/catalogo']);
      });
      console.log(this.material);
    }
  }
}
