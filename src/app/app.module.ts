import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {ExerciseService} from './exercise.service';
import {HttpClientModule} from '@angular/common/http';
import { WorkoutComponent } from './workout/workout.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { MenuComponent } from './menu/menu.component';
import { CreateComponent } from './workout/create/create.component';


const routes: Routes = [
  { path: 'exercises', component: ExercisesComponent },
  { path: 'workouts', component: WorkoutComponent},
  { path: 'workouts/create', component: CreateComponent},
  { path: '', component: MenuComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    ExercisesComponent,
    MenuComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
