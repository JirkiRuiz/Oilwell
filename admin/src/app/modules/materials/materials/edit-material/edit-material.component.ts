import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/services/materials.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.css']
})
export class EditMaterialComponent implements OnInit {

  public material: any = {};
  public id: any;
  public categorias: Array<any> = [];
  public token: any;

  constructor(
    private _materialsService: MaterialsService,
    private _router:Router,
    private _route : ActivatedRoute,
    private _adminService: AdminService
  )
  {this.token = this._adminService.getToken();
  }


  ngOnInit(): void {
    
  }


  actualizar(actualizarForm: any){
    if(actualizarForm.valid){
      
      var data : any = {};


      data.titulo = this.material.titulo;
      data.stock= this.material.stock;
      data.precio= this.material.precio;
      data.categoria= this.material.categoria;
      data.descripcion= this.material.descripcion;
      data.contenido= this.material.contenido;

      this._materialsService.actualizar_materiales_admin(data, this.id, this.token).subscribe(response =>{
          console.log(response);
          this._router.navigate(['/catalogo']);
        });
        
    }  
  

 
}
}