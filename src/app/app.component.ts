import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoC02I';

  isCountDown='Chua ket thuc';

  finnishCha(){
    this.isCountDown = 'Ket thuc';
  }
}
