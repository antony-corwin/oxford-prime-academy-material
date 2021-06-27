import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Path } from "@app/@core/structs";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent implements OnInit {
  path = Path;
  notifications = [];
  profileMenu = [
    {
      label: 'Profile',
      icon: 'profile',
      link: '/',
    },
    {
      label: 'Logout',
      icon: 'logout',
      link: '/',
    }
  ];
  dropdownOpened: boolean = false;

  // @ts-ignore
  myControl: FormControl;
  // @ts-ignore
  filteredOptions: Observable<any>;

  constructor() {
  }

  ngOnInit(): void {

  }

  // onClickSignOut(): void {
  //   this.authService.signOut();
  //   this.router.navigate(['/', Path.SignIn]);
  // }

  toggleProfileMenu(event: MouseEvent) {
    event.stopPropagation();
    this.dropdownOpened = !this.dropdownOpened;
  }
}
