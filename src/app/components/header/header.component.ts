import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Path } from '@app/@core/structs';
import { AuthService } from '@app/pages/public/auth/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent implements OnInit {
  path = Path;
  selectedLang = 'en';
  currentUrl: string | undefined;

  constructor(private router: Router, private authService: AuthService) {
    // get current URL
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit(): void {
  }

  // onClickSignOut(): void {
  //   this.authService.signOut();
  //   this.router.navigate(['/', Path.SignIn]);
  // }

  changeLang(lang: string) {
    this.selectedLang = lang;
  }
}
