import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/services/materials.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { GLOBAL } from 'src/app/services/GLOBAL';

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
  public apiUrl: any;

  constructor(
    private _materialsService: MaterialsService,
    private _router:Router,
    private _route : ActivatedRoute,
    private _adminService: AdminService
  )
  {
    this.token = this._adminService.getToken();
    this.apiUrl = GLOBAL.apiUrl;
  }


  ngOnInit(): void {
    this._route.params.subscribe(
      params =>{
        this.id = params['id'];
        console.log(this.id);
        this._materialsService.obtener_materiales_admin(this.id,this.token).subscribe(
          response => {
            if(response.data == undefined){
              this.material = undefined;
            }else{
              this.material = response.data;
            }


          },
          error => {
            console.log(error);
          }
        );


      }
    );
  }


  actualizar(actualizarForm: any){
    if(actualizarForm.valid){
      
      var data : any = {};


      data.titulo = this.material.titulo;
      data.categoria= this.material.categoria;
      data.stock= this.material.stock;
      data.estado= this.material.estado;
      


      this._materialsService.actualizar_materiales_admin(data, this.id, this.token).subscribe(
        response =>{
          console.log("Se envio correctamente");
          this._router.navigate(['/catalogo']);
        },
        error => {
          console.log(error);
        }
        );
        
    }  
  

 
}
}