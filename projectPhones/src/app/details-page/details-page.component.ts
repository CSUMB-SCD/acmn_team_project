import { Observable } from 'rxjs';
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
@Input()

  phone$: Phone;
  constructor( private route: ActivatedRoute,
    // tslint:disable-next-line:no-shadowed-variable
    private Phone: PhoneService, private location: Location) {
      this.route.params.subscribe( params => this.phone$ = params.id);
    }

  ngOnInit(): void {
    this.Phone.getPhone(this.phone$).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      Phone => this.phone$ = Phone
    );
  }


}
