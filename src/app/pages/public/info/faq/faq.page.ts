import { Component, OnInit } from '@angular/core';
import { Path } from '@core/structs';

@Component({
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  path = Path;


  constructor() {}

  ngOnInit(): void {}


}
