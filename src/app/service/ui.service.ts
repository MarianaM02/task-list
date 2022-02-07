import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Task } from '../Task';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false;
  // Subjects are like EventEmitters. (o eso dice la documentación, vamos a creerle)
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask():void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle():Observable<any> {
    return this.subject.asObservable();
  }
}
