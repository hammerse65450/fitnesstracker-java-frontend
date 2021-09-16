import { Component, OnInit } from '@angular/core';
import {Workout} from '../workout';
import {Exercise} from '../exercise';
import {HttpErrorResponse} from '@angular/common/http';
import {WorkoutService} from '../workout.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  public workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService, private location: Location) { }

  ngOnInit(): void {
    this.getWorkouts();
  }

  public getWorkouts(): void {

    this.workoutService.getWorkouts().subscribe(
      (response: Workout[]) => {
        this.workouts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public back(): void {
    this.location.back();
  }

  public detail(): void {


  }
}
