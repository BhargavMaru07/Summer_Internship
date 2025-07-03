import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SignupComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Bhargav'; //it's called properties. same as variable but in class we can not create variable using 'const/let'. we can create variable in function if we needed.

  // data can accept number as well as string data type value
  data: number | string = 'data';

  //use any for all data type
  somethig: any = true;

  handleClick() {
    let x: Number = 20;
    console.log(x);

    //use "this" to call another function in class.
    this.another();
  }

  another() {
    console.log('Hello world');
    this.data = 123;
  }

  //argument data types needs to specify.
  sum(a: number, b: number) {
    console.log(a + b);
  }

  //event handling
  handleEvent(event: any) {
    console.log(event.type);
  }

  handleInput(event: any) {
    console.log(event.type);
    console.log('value ', (event.target as HTMLInputElement).value);
  }

  display: boolean = true;
  toggleDisplay() {
    this.display = !this.display;
  }

  isLoggedIn = true;

  //loop
  items = ["one","two","three"];
}
