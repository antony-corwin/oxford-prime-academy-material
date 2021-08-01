import { Component, OnInit } from '@angular/core';

import { Path } from '@core/structs';

@Component({
  templateUrl: './admissions.page.html',
  styleUrls: ['./admissions.page.scss'],
})
export class AdmissionsPage implements OnInit {
  path = Path;


  constructor() {}

  ngOnInit(): void {}


}
