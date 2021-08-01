import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubNavComponent } from './sub-nav.component';
import { RouterModule } from "@angular/router";
import { MatDividerModule } from "@angular/material/divider";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [SubNavComponent],
  imports: [CommonModule, RouterModule, MatDividerModule, MatTabsModule],
  exports: [SubNavComponent],
})
export class SubNavModule {}
