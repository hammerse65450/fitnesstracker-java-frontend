import {Exercise} from './exercise';

export interface Workout {
  id: number;
  name: string;
  exercises: Array<Exercise>;
}
