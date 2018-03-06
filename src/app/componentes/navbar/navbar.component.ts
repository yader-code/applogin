import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public name: string;
  public email: string;
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe( auth => {
      if(auth){
        this.isLogin = true;
        this.name = auth.displayName;
        this.email = auth.email;
      }else{
        this.isLogin = false;
      }
    });
  }

  onClickLogOut(){
    this.authService.logout();
  }

}
