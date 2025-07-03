import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'counterApp';

  count = 0;

  handleCount(str:string){
    if(str == "plus"){
      this.count++;
    }else if(str == "minus"){
      if(this.count == 0){
        this.count = 0;
        alert("Negative Not allowed");
      }else{
        this.count--;
      }
    }else{
      this.count = 0;
    }
  }
}
