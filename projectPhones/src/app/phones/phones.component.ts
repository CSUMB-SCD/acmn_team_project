import { PhoneService } from './../phone.service';
import { Component, OnInit } from '@angular/core';
import { PHONES } from '../mock-phones';
import { Phone } from '../phone';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {


  phones: Phone[];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private PhoneService: PhoneService) { }

  ngOnInit() {
    this.getPhones();
  }

  getPhones(): void {
    this.PhoneService.getPhones()
        .subscribe(phones => this.phones = phones);
  }
}
