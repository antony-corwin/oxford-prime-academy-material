import { Component, OnInit } from '@angular/core';
import { Path } from '@app/@core/structs';

@Component({
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  path = Path;
  location = window.location;




  constructor() {}

  ngOnInit(): void {}

}
