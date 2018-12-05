import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { PHONES } from './mock-phones';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private MessageService: MessageService, private http: HttpClient) { }

  getPhones() {
    return this.http.get<Phone>('https://freedomphones-db-microservice.herokuapp.com/allPhones');
  }

   getPhone(id) {
    return this.http.get<Phone>('https://freedomphones-zuul-svc.herokuapp.com/phone-service/findById/' + id);
  }
}
