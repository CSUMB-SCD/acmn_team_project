import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { PHONES } from './mock-phones';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private MessageService: MessageService) { }

  getPhones(): Observable <Phone[]> {
    this.MessageService.add('PhoneService: fetched PHONES');
    return of (PHONES);
  }

  getPhone(key: number): Observable<Phone> {
    this.MessageService.add(`Phone Service: fetched phone key =${key}`);
    // tslint:disable-next-line:no-shadowed-variable
    return of (PHONES.find(Phone => Phone.key === key));

  }
}
