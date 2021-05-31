import { Component, OnInit } from '@angular/core';
import { Path } from '@core/structs';

@Component({
  templateUrl: './online.page.html',
  styleUrls: ['./online.page.scss'],
})
export class OnlinePage implements OnInit {
  path = Path;


  constructor() {
  }

  ngOnInit(): void {
  }
}
