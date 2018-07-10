import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  @Input() task;

  constructor() {
  }

  ngOnInit() {

    switch (true) {
      case this.task.name === 'Task':
        this.task.color = 'task-name-color-blue';
        break;
      case this.task.name === 'Epic':
        this.task.color = 'task-name-color-green';
        break;
      case this.task.name === 'Sprint':
        this.task.color = 'task-name-color-red';
        break;
    }
  }
}
