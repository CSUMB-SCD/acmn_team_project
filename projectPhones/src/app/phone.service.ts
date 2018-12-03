import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Subject, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private itemsInCartSubject: BehaviorSubject<Phone[]> = new BehaviorSubject([]);
  private itemsInCart: Phone[] = [];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private http: HttpClient) { }

  getPhones(): Observable<Phone> {
    return this.http.get<Phone>('https://freedomphones-db-microservice.herokuapp.com/allPhones');
  }

   getPhone(id: string): Observable<Phone> {
    return this.http.get<Phone>('https://freedomphones-zuul-svc.herokuapp.com/phone-service/findById/' + id);
  }
  // tslint:disable-next-line:no-shadowed-variable
  public addToCart(Phone: Phone) {
    }
}
