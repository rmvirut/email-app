import { Component, OnInit } from "@angular/core";
import { inbox } from "../inbox";

@Component({
  selector: "app-inbox-list",
  templateUrl: "./inbox-list.component.html",
  styleUrls: ["./inbox-list.component.css"]
})
export class InboxListComponent implements OnInit {
  emails = inbox;

  constructor() {}

  ngOnInit() {}
}
