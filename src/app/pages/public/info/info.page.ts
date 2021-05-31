import { Component, OnInit } from '@angular/core';

import { Path } from '@core/structs';

@Component({
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  path = Path;


  constructor() {
  }

  ngOnInit(): void {
  }
}
