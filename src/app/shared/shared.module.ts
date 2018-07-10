import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Broadcaster} from "./broadcaster.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    Broadcaster
  ]
})
export class SharedModule { }
