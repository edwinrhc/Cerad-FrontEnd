import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private notificacionSubject = new Subject<String>();
  notification$ = this.notificacionSubject.asObservable();

  show(message: string){
    this.notificacionSubject.next(message);
  }

  constructor() { }
}
