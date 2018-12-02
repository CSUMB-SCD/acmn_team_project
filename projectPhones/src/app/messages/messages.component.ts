import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public MessageService: MessageService) { }

  ngOnInit() {
  }

}
