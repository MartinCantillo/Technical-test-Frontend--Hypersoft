import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrls: ['./logout-component.component.css']
})
export class LogoutComponentComponent {
constructor( private authService: AuthServiceService, ){
  this.logout();
}
logout(){
  this.authService.logout();

}
}
