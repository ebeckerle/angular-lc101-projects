import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = false;

  styleLeft = 0;
  styleBottom = 0;


  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.width = this.width + 10000;
      this.takeOffEnabled = true;
    }
  }

  handleLand(rocketImage){
    let result = window.confirm('The shuttle is landing. Landing gear engaged.');
    if (result) {
      this.color = 'green';
      this.height = 0;
      this.message = 'The shuttle has landed.'
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = false;
    }
  }

  handleAbort(rocketImage){
    let result = window.confirm('Are you sure you want to abort mission?');
    if (result) {
      this.message = 'Mission Aborted';
      this.color = 'red';
      this.height = 0;
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = false;
    }
  }

  moveRocket(rocketImage, direction){
    if (direction === 'right'){
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      // this.styleLeft = this.styleLeft + 10;
      // this.width = this.width + 10000;
      console.log("move right");
      let movementNo = Number(movement.slice(0,3));
      if (movementNo>=390) {
        this.color = 'orange';
      }
    }
    if (direction === 'left'){
      let movement = parseInt(rocketImage.style.left) + -10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      console.log("move left");
    }
    if (direction === 'up'){
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      console.log("move up");
      let movementNo = Number(movement.slice(0,3));
      if (movementNo>=340) {
        this.color = 'orange';
      }
    }
    if (direction=== 'down'){
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      console.log("move down");
    }
  }
}
