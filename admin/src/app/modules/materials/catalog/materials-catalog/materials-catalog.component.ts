import { Component , ViewChild , ElementRef,  Renderer2} from '@angular/core';

@Component({
  selector: 'app-materials-catalog',
  templateUrl: './materials-catalog.component.html',
  styleUrls: ['./materials-catalog.component.css']
})
export class MaterialsCatalogComponent {
  @ViewChild('sortList') sortList: ElementRef = {} as ElementRef;
  @ViewChild('sortButton') sortButton: ElementRef = {} as ElementRef;

    public sort:string = 'Nombre';
    public displayList:boolean = false;

    constructor( private render: Renderer2){
      
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
