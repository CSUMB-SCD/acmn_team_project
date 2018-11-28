import { Component, OnInit } from '@angular/core';
import { PHONE } from '../mock-phones';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  phones = PHONE;
  constructor() { }

  ngOnInit() {
  }
  clickEventHandler(phone: number) {
   //pass the key value with the router to the details page & get the shit


  }
}
