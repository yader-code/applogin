import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public messagesService: FlashMessagesService
  ) { }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then( (res) => {
      this.messagesService.show('Se ha registrado exitosamente.', 
      {cssClass: 'alert-success', timeout: 6000});
      this.router.navigate(['/privado']);
    }).catch( (err) => {
      this.messagesService.show(err.message, 
      { cssClass: 'alert-danger', timeout: 6000 });
      console.log(err);
    })
  }
  ngOnInit() {
  }

}
