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
    

    public materials : Array<any> = [];
    public load_data = true;
    public filtro = ''; 

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

    initData(filtro: any){
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
      this.initData(this.filtro)
      console.log(this.filtro);
     
    }
    
    
    
    resetear(){
      this.filtro = '';
      this.initData(this.filtro)
    }

    
  
}
