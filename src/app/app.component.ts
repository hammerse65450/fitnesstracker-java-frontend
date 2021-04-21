import {Component, OnInit} from '@angular/core';
import {Exercise} from './exercise';
import {ExerciseService} from './exercise.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public exercises: Exercise[] | undefined;

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
    this.getExercises();
  }

  public getExercises(): void {

    this.exerciseService.getExercises().subscribe(
      (response: Exercise[]) => {
        this.exercises = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
