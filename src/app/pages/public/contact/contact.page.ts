import { Component, OnInit } from '@angular/core';
import { Path } from '@core/structs';

@Component({
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  path = Path;


  constructor() {
  }

  ngOnInit(): void {
  }
}
