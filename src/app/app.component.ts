import {Component, OnInit} from '@angular/core';
import {Exercise} from './exercise';
import {ExerciseService} from './exercise.service';
import {WorkoutService} from './workout.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Workout} from './workout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: 'fitnesstracker-frontend' | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
