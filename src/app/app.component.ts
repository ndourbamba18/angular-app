import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  constructor(private router: Router){}

  onProduct(){
    this.router.navigate(["/product"]);
  }

  onAbout(){
    this.router.navigate(["/about"]);
  }

  onContact(){
    this.router.navigate(["/contact"]);
  }

  onLogin(){
    this.router.navigate(["/login"]);
  }

}
