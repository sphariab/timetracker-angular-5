
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.sass']
})
export class SubtaskComponent implements OnInit {
  @Input() subtask;
  constructor() { }

  ngOnInit() {
  }

}
