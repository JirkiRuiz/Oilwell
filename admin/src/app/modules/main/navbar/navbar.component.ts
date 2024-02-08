import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  showDropdown = false;
  
  

  constructor(
    private _adminService: AdminService,
    private _router: Router
  ){
   
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logOut(){
    
    this._adminService.logOut(); 
    this._router.navigate(['/login']);

  }
  
}
