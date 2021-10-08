import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Keramiek } from '../models/keramiek.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  public subject = new Subject()

  constructor() { }

  sendMsg(keramiek : Keramiek) {
   // console.log(keramiek);
    this.subject.next(keramiek) //Triggering the event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
