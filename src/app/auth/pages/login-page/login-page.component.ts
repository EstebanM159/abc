import {  Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  onSubmit(email:string,password:string){
    console.log({email,password})
  }

 }
