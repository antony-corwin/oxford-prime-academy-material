import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Path } from '@core/structs';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  path = Path;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
}
