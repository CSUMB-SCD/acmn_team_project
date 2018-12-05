import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private http: HttpClient) { }

  getPhones() {
    return this.http.get('https://freedomphones-db-microservice.herokuapp.com/allPhones');
  }

   getPhone(id) {
    return this.http.get('https://freedomphones-zuul-svc.herokuapp.com/phone-service/findById/' + id);
  }
}
