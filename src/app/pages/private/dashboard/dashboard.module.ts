import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { SideNavModule } from "@components/side-nav/side-nav.module";

@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardPage,
        data: {
          title: "Dashboard",
          robots: "noindex, nofollow",
        },
      },
    ]),
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    SideNavModule,
  ],
})
export class DashboardModule {}
