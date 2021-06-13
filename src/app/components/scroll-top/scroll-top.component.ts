// import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-scroll-top',
//   templateUrl: './scroll-top.component.html',
//   styleUrls: ['./scroll-top.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class ScrollTopComponent implements OnInit {
//   constructor() {}
//
//   ngOnInit(): void {}
// }
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  windowScrolled: boolean;
  upIcon = faChevronUp;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.windowScrolled = false;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }



  ngOnInit() {
  }



  scrollToTop() {
    (function smoothscroll() {

      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }

    })();
  }

}
