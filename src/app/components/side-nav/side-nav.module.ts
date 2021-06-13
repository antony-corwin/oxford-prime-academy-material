import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideNavComponent } from './side-nav.component';
import { RouterModule } from "@angular/router";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, RouterModule, MatDividerModule],
  exports: [SideNavComponent],
})
export class SideNavModule {}
