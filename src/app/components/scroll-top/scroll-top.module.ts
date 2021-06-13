import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollTopComponent} from "./scroll-top.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [ScrollTopComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ScrollTopComponent],
})
export class ScrollTopModule {}
