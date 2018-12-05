import { PhoneService } from './../phone.service';
import { Component, OnInit } from '@angular/core';
import { PHONES } from '../mock-phones';
import { Phone } from '../phone';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  phones$: Object;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private PhoneService: PhoneService) { }

  ngOnInit() {
    this.getPhones();
  }

  getPhones(): void {
    this.PhoneService.getPhones().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      Phone => this.phones$ = Phone
    );
   }
}
