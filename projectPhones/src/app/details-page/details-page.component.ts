import { PhoneService } from './../phone.service';
import { Phone } from './../phone';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
@Input() Phone: Phone;
  constructor( private route: ActivatedRoute,
    // tslint:disable-next-line:no-shadowed-variable
    private PhoneService: PhoneService,
    private location: Location) { }

  ngOnInit(): void {
    this.getPhone();
  }
  getPhone(): void {
    const key = +this.route.snapshot.paramMap.get('key');
    this.PhoneService.getPhone(key)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(Phone => this.Phone = Phone);
  }

}
