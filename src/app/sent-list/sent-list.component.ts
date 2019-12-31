import { Component, OnInit } from '@angular/core';
import { sent } from '../inbox';

@Component({
  selector: 'app-sent-list',
  templateUrl: './sent-list.component.html',
  styleUrls: ['./sent-list.component.css']
})
export class SentListComponent implements OnInit {

  emails = sent;
  constructor() { }

  ngOnInit() {
  }

}
