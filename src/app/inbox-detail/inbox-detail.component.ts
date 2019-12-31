import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { inbox } from '../inbox';

@Component({
  selector: 'app-inbox-detail',
  templateUrl: './inbox-detail.component.html',
  styleUrls: ['./inbox-detail.component.css']
})

export class InboxDetailComponent implements OnInit {

  email;

  constructor(private route: ActivatedRoute, ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.email = inbox[+params.get('emailId')];
    });
  }
}
