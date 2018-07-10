import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './main-container/navigation/navigation.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { TaskComponent } from './main-container/project/task/task.component';
import { FilterPipe } from './filter.pipe';
import { ProjectComponent } from './main-container/project/project.component';
import { SubtaskComponent } from './main-container/project/task/subtask/subtask.component'; // import our pipe here
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainContainerComponent,
    TaskComponent,
    FilterPipe,
    ProjectComponent,
    SubtaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
