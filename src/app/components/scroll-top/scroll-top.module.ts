import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollTopComponent} from "./scroll-top.component";

@NgModule({
  declarations: [ScrollTopComponent],
  imports: [CommonModule],
  exports: [ScrollTopComponent],
})
export class ScrollTopModule {}
