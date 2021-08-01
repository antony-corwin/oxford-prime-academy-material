import { Component, OnInit} from '@angular/core';
import { Path } from '@core/structs';

@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit{
  path = Path;
  public navItems = [
    {
      label: "Users",
      link: "users-list",
    },
    {
      label: "Invitation",
      link: "invitation",
    },
    {
      label: "Online Requests",
      link: "online-requests",
    },
    {
      label: "Documents",
      link: "documents",
    },
    {
      label: "Archive",
      link: "archive",
    }];

  constructor() {
  }

  ngOnInit(): void {
  }
}
