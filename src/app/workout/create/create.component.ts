import { Component, OnInit } from '@angular/core';
import {WorkoutService} from '../../workout.service';
import {Exercise} from '../../exercise';
import {HttpErrorResponse} from '@angular/common/http';
import {Workout} from '../../workout';
import {ExerciseService} from '../../exercise.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public selectableExercises: Exercise[] = [];
  public selectedExercises: Exercise[] = [];

  constructor(private workoutService: WorkoutService, private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.getExercises();
  }

  public getExercises(): void {

    this.exerciseService.getExercises().subscribe(
      (response: Exercise[]) => {
        this.selectableExercises = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addWorkout(): void {

    const workoutName: string = (document.getElementById('name') as HTMLInputElement).value;

    this.workoutService.addWorkout({name: workoutName, exercises: this.selectedExercises}).subscribe(
      (response: Workout) => {
        console.log('Workout wurde erstellt');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public selectExercise(exercise: Exercise): void {
    this.selectedExercises.push(exercise);
    console.log('Exercise ' + exercise.name + ' selected!');
  }
}
