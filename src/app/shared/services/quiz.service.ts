import { Injectable, Injector } from '@angular/core';
import { AbstractService } from './abstract.service';

interface Quiz {

}
@Injectable({
  providedIn: 'root'
})
export class QuizService extends AbstractService<Quiz> {
  constructor(private injector: Injector) {
    super(injector, '/quizzes');
  }
}
