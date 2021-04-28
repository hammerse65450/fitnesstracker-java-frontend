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
  public exercises: Exercise[] = [];
  public allExercises: Exercise[] = [];
  public searchString: string | undefined;

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
    this.getExercises();
  }

  public getExercises(): void {

    this.exerciseService.getExercises().subscribe(
      (response: Exercise[]) => {
        this.allExercises = response;
        this.exercises = this.allExercises;
        this.searchFor();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchFor(): void {
    this.searchString = (document.getElementById('search') as HTMLInputElement).value;
    if (this.searchString !== '') {
      this.exercises = [];
      this.allExercises?.forEach(
        (exercise) => {
          if (exercise.name.toUpperCase().includes(this.searchString?.toUpperCase() as string)) {
            this.exercises.push(exercise);
          }
        });
    } else {
      this.exercises = this.allExercises;
    }
  }

  public addExercise(): void {

    const exerciseName: string = (document.getElementById('search') as HTMLInputElement).value;

    const startWeight = 20;

    this.exerciseService.addExercises({name: exerciseName, weight: startWeight}).subscribe(
      (response: Exercise) => {
        this.getExercises();
        (document.getElementById('search') as HTMLInputElement).value = '';
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public increaseWeight(exercise: Exercise): void {

    exercise.weight += 1;
    this.exerciseService.updateExercises(exercise).subscribe(
      (response: Exercise) => {
        this.getExercises();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public decreaseWeight(exercise: Exercise): void {

    exercise.weight -= 1;
    this.exerciseService.updateExercises(exercise).subscribe(
      (response: Exercise) => {

        this.getExercises();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteExercise(exercise: Exercise): void {

    this.exerciseService.deleteExercises(exercise.id).subscribe(
      (response: void) => {
        this.getExercises();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

}
