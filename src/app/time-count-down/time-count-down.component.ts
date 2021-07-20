import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-time-count-down',
  templateUrl: './time-count-down.component.html',
  styleUrls: ['./time-count-down.component.css']
})
export class TimeCountDownComponent implements OnInit {

  timer: number;
  startTime: any;

  @Input("t")
  get timer1(){
     return this.timer
  }
  set timer1(value){
    const  v = Number(value);
    if (Number.isNaN(v)){
      this.timer = 8;
    }
    else {
      this.timer = value;
    }
  }

  constructor() {
    this.timer = 12;
  }

  ngOnInit(): void {
  }

  start(){
    this.startTime = setInterval(()=>{
      if (this.timer >0){
        this.timer--;
        this.isCountDown();
      }
      // console.log("Ham dang chay")
      // console.log("Ham dang chay")
    }, 1000)
  }

  stop(){
    console.log("ket thuc");
    // this.isCountDown();
    clearInterval(this.startTime);
  }

  @Output()
  finish = new EventEmitter<boolean>();
  isCountDown(){
    if(this.timer == 0){
      this.stop();
      this.finish.emit(true);
    }
  }

}
