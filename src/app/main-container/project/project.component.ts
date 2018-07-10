import { Component, OnInit, Input } from '@angular/core';
import { tasks } from '../tasks';
import {Broadcaster} from "../../shared/broadcaster.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})

export class ProjectComponent implements OnInit {
  @Input() chosenTechniques;
  public tasks = tasks;
  public filteredTasks;
  public filters: any = [];

  constructor(
    private _broadcaster: Broadcaster
  ) { }

  ngOnInit() {
    this.filteredTasks = tasks;
    this._broadcaster
      .on('filter-update')
      .subscribe((filters) => {
        if (filters.length && filters.length > 0) {
          this.filteredTasks = tasks.filter((task) => {
            return task.tags.some((tag) => filters.includes(tag));
          })
        } else {
          this.filteredTasks = tasks;
        }

    });
  }

}
