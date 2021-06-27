import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Path } from "@core/structs";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent implements OnInit {
  path = Path;

  navItems = [
    {
      icon: 'home',
      label: 'Home',
      link: 'dashboard'
    },
    {
      icon: 'cms',
      label: 'CMS',
      link: 'cms'
    },
    {
      icon: 'videos',
      label: 'Videos',
      link: 'videos'
    },
    {
      icon: 'users',
      label: 'Users',
      link: 'users'
    },
    {
      icon: 'school',
      label: 'School',
      link: 'school'
    },
    {
      icon: 'billing',
      label: 'Billing',
      link: 'billing'
    },
    {
      icon: 'reports',
      label: 'Reports',
      link: 'reports'
    },
    {
      icon: 'accounting',
      label: 'Accounting',
      link: 'accounting'
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
