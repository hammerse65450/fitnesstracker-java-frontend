import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WorkoutService} from '../../workout.service';
import {Workout} from '../../workout';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {Exercise} from '../../exercise';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-workoutdetail',
  templateUrl: './workoutdetail.component.html',
  styleUrls: ['./workoutdetail.component.css']
})
export class WorkoutdetailComponent implements OnInit {

  public workout: Workout | undefined;

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService, private location: Location) {
    this.route.params.subscribe(params => this.findWorkout(params.id));
  }

  ngOnInit(): void {
  }

  public findWorkout(id: number): void {

    this.workoutService.getWorkout(id).subscribe(
      (response: Workout) => {
        this.workout = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public back(): void {
    this.location.back();
  }
}
