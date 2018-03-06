import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public messageService: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onSubmitLogin(){
    this.authService.login(this.email, this.password)
    .then( (res) => {
      this.messageService.show('Bienvenido ', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/privado']);
    }).catch( (err) => {
      this.messageService.show(err.message, {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['/login']);
    });
  }

}
