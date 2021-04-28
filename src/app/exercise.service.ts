import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Exercise} from './exercise';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.apiServerUrl}/exercise/all`);
  }

  public addExercises(exercise: { name: string; weight: number }): Observable<Exercise> {
    return this.http.post<Exercise>(`${this.apiServerUrl}/exercise/add`, exercise);
  }

  public updateExercises(exercise: Exercise): Observable<Exercise> {
    return this.http.put<Exercise>(`${this.apiServerUrl}/exercise/update`, exercise);
  }

  public deleteExercises(exerciseId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/exercise/delete/${exerciseId}`);
  }

}
