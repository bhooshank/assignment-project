import { Component, VERSION } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  optionSelected = 1;

  todo = ["Get to work", "Pick up groceries"];

  done = ["Get up", "Brush teeth"];

  review = ["Take bath", "Wash car"];

  source3 = ["read book", "practice coding"];


  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
