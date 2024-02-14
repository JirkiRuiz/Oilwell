import { Component , ViewChild , ElementRef,  Renderer2, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MaterialsService } from 'src/app/services/materials.service';

@Component({
  selector: 'app-materials-list',
  templateUrl: './materials-list.component.html',
  styleUrls: ['./materials-list.component.css']
})
export class MaterialsListComponent implements OnInit {
  @ViewChild('sortList') sortList: ElementRef = {} as ElementRef;
  @ViewChild('sortButton') sortButton: ElementRef = {} as ElementRef;

    public sort:string = 'Nombre';
    public displayList:boolean = false;
    public token: any;

    public confirmarEliminacionModal : boolean = false;

    public materials : Array<any> = [];
    public load_data = true;
    public filtro = ''; 
    public dropDown : boolean = true;
  categoria: any;
  estado: any;

    constructor( 
      private render: Renderer2,
      private router: Router,
      private _materialsService : MaterialsService,
      private _adminService: AdminService
      ){

    
      
      this.render.listen('window' , 'click' , (e:Event) =>{
        if(this.sortList && this.sortButton){
          if (e.target !== this.sortList.nativeElement && e.target !== this.sortButton.nativeElement ) {
            this.toggleSort();
          }
        }
      }),
      this.token = this._adminService.getToken();
    }

    
    ngOnInit(): void {
      this.initData(this.filtro);
    }

    initData(filtro: any ){
      this._materialsService.listar_materiales_admin(this.filtro, this.token).subscribe(
        response =>{
          console.log(response);
          this.materials = response.data;
          this.load_data = false;
  
        },
        error=>{
          console.log(error)
      })
    }


    public toggleSort(){
      this.displayList = !this.displayList
    }

    public onFilter(filter:string){
      this.sort = filter;
    }

    filtrar(){
     
      if(this.filtro){
        this._materialsService.listar_materiales_admin(this.filtro,this.token).subscribe(
          response => {
            console.log(response);
            this.materials = response.data;
           
          },
          error =>{
            console.log(error);
          }
  
        )
    
    }
    }
    
    
    
    resetear(){
      this.filtro = '';
      this.initData(this.filtro);
    }

    
    optionsDrop(){
      this.dropDown = false;
    }


    // eliminarMaterial(id : any){
    //   this._materialsService.eliminar_materiales_admin(id, this.token).subscribe(
    //     response =>{
    //       console.log("Se elimino")
    //       this.initData(this.filtro);
    //       console.log(this.materials);  
    //     },
    //     error => {
    //       console.log("No se ha podido eliminar el elemento.")
    //     }
    //     )
    // }

    abrirModalEliminar(id: any) {
      // Aquí puedes mostrar el modal de confirmación según la implementación que estés utilizando
      // Por ejemplo, podrías cambiar una variable de estado para mostrar u ocultar el modal
      console.log("Abriendo modal para eliminar el material con ID:", id);
      this.confirmarEliminacionModal = true;
    }
  
    cerrarModalEliminar() {
      // Aquí puedes ocultar el modal de confirmación según la implementación que estés utilizando
      // Por ejemplo, podrías cambiar una variable de estado para mostrar u ocultar el modal
      console.log("Cerrando modal de confirmación");
      this.confirmarEliminacionModal = false;

    }

    cancelarEliminacion(): void{
      this.cerrarModalEliminar();
    }
  
    confirmarEliminar(id: any) {
      this._materialsService.eliminar_materiales_admin(id, this.token).subscribe(
        response => {
          console.log("Se eliminó el material correctamente");
          this.initData(this.filtro);
          this.cerrarModalEliminar();
        },
        error => {
          console.log("No se ha podido eliminar el elemento:", error);
        }
      );
    }
}
