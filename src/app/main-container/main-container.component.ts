import { Component, OnInit } from '@angular/core';
import { techniques } from './techniques'
import {Broadcaster} from "../shared/broadcaster.service";


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.sass']
})
export class MainContainerComponent implements OnInit {
  public techniques = techniques;
  public chosenTechniques: any[] = [];
  public some: any[] = [];

  constructor(
    private _broadcaster: Broadcaster
  ) { }

  ngOnInit() {

  }

  public filterProjects = function(technique){

    if (this.chosenTechniques.includes(technique)) {
      this.chosenTechniques.splice(this.chosenTechniques.indexOf(technique), 1);
    } else {
      this.chosenTechniques.push(technique);
    }

    this._broadcaster.broadcast(
      'filter-update',
      this.chosenTechniques.map(tech => tech.title)
    );

  /*    if (technique !=='all' && !technique.selected) {
          this.technique = technique.title;
          if (this.chosenTechniques.length !== 0 ) {
              if (this.chosenTechniques.indexOf(this.technique) === -1){
                  technique.selected = true;
                  this.chosenTechniques.push(this.technique);
                  console.log('chosenTechnique', this.chosenTechniques);
              } else {
                  this.chosenTechniques.splice(1, this.chosenTechniques.indexOf(this.technique));
                  console.log('chosenTechnique', this.chosenTechniques);
              }
          } else {
              technique.selected = true;
              this.chosenTechniques.push(this.technique);
              console.log('chosenTechnique', this.chosenTechniques);
          }

      } else if (technique.selected){
          technique.selected = false;
          this.chosenTechniques.splice(this.chosenTechniques.indexOf(this.technique), 1);
          console.log('chosenTechnique', this.chosenTechniques);
      } else if (technique ==='all'){
          this.techniques.map(function(tech){
            tech.selected = false
          });
          this.technique = 'all';
          this.chosenTechniques[0] = 'all';
    }*/
  }



}
