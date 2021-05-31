import { Component, OnInit } from '@angular/core';
import { Path } from '@core/structs';

@Component({
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  path = Path;


  constructor() {
  }

  ngOnInit(): void {
  }
}
