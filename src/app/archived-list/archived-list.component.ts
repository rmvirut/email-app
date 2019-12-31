import { Component, OnInit } from '@angular/core';
import { sent } from '../inbox';
import { inbox } from '../inbox';


@Component({
  selector: 'app-archived-list',
  templateUrl: './archived-list.component.html',
  styleUrls: ['./archived-list.component.css']
})
export class ArchivedListComponent implements OnInit {

  // this.inboxEmails = inbox;
  // this.sentEmails = sent;

  // emails = inboxEmails.concat(sentEmails);

  constructor() { }

  ngOnInit() {
  }

}
