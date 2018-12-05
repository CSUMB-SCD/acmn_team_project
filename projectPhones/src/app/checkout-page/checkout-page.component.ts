import { PhoneService } from './../phone.service';
import { Phone } from './../phone';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
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
