import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Task } from '../../Task'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  subscription?: Subscription;
  showAddTask:boolean = false;

  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => this.showAddTask = value
    );
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.text.length === 0) {
      alert("Please add task!");
      return;
    }
    
    /*
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }*/

    // what is this??????????
    const { text, day, reminder } = this
    const newTask = { text, day, reminder }

    this.onAddTask.emit(newTask);

  }
}
