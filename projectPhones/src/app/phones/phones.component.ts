import { PhoneService } from './../phone.service';
import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss'],
  providers: [PhoneService]
})
export class PhonesComponent implements OnInit {

  phones$: Object;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private Phone: PhoneService) { }

  ngOnInit() {
    this.getPhones();
  }

  getPhones(): void {
    this.Phone.getPhones().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      Phone => this.phones$ = Phone
    );
   }
}
