import { Component , ViewChild , ElementRef,  Renderer2} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materials-list',
  templateUrl: './materials-list.component.html',
  styleUrls: ['./materials-list.component.css']
})
export class MaterialsListComponent {
  @ViewChild('sortList') sortList: ElementRef = {} as ElementRef;
  @ViewChild('sortButton') sortButton: ElementRef = {} as ElementRef;

    public sort:string = 'Nombre';
    public displayList:boolean = false;

    constructor( 
      private render: Renderer2,
      private router: Router
      ){
      
      this.render.listen('window' , 'click' , (e:Event) =>{
        if(this.sortList && this.sortButton){
          if (e.target !== this.sortList.nativeElement && e.target !== this.sortButton.nativeElement ) {
            this.toggleSort();
          }
        }
      })
    }

    public toggleSort(){
      this.displayList = !this.displayList
    }

    public onFilter(filter:string){
      this.sort = filter;
    }
}
