import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Exercise} from './exercise';
import {Workout} from './workout';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {
  }

  public getWorkouts(): Observable<Workout[]>{
    return this.http.get<Workout[]>(`${this.apiServerUrl}/workouts/all`);
  }

  public addWorkout(workout: { name: string; exercises: Array<Exercise> }): Observable<Workout> {
    return this.http.post<Workout>(`${this.apiServerUrl}/workouts/add`, workout);
  }

  public updateWorkout(workout: Workout): Observable<Workout> {
    return this.http.put<Workout>(`${this.apiServerUrl}/workouts/update`, workout);
  }

  public deleteWorkout(workoutId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/workouts/delete/${workoutId}`);
  }
}
