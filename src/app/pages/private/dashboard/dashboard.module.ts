import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { MatDividerModule } from "@angular/material/divider";
import { SideNavModule } from "@components/side-nav/side-nav.module";
import { HeaderModule } from "@components/header/header.module";
import { Path } from "@core/structs";

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
        // TODO fix children!
        children: [
          {
            path: '',
            redirectTo: Path.Dashboard,
            pathMatch: 'full',
          },
          {
            path: Path.Home,
            loadChildren: () =>
              import('@app/pages/public/info/about-us/about-us.module').then(
                (m) => m.AboutUsModule,
              ),
          },
          {
            path: Path.CMS,
            loadChildren: () =>
              import('@app/pages/public/info/curriculum/curriculum.module').then(
                (m) => m.CurriculumModule,
              ),
          },
          {
            path: Path.Videos,
            loadChildren: () =>
              import(
                '@app/pages/public/info/admissions/admissions.module'
                ).then((m) => m.AdmissionsModule),
          },
          {
            path: Path.Users,
            loadChildren: () =>
              import(
                '@app/pages/public/info/faq/faq.module'
                ).then((m) => m.FaqModule),
          },
          {
            path: Path.School,
            loadChildren: () =>
              import(
                '@app/pages/public/info/faq/faq.module'
                ).then((m) => m.FaqModule),
          },
          {
            path: Path.Billing,
            loadChildren: () =>
              import(
                '@app/pages/public/info/faq/faq.module'
                ).then((m) => m.FaqModule),
          },
          {
            path: Path.Reports,
            loadChildren: () =>
              import(
                '@app/pages/public/info/faq/faq.module'
                ).then((m) => m.FaqModule),
          },
          {
            path: Path.Accounting,
            loadChildren: () =>
              import(
                '@app/pages/public/info/faq/faq.module'
                ).then((m) => m.FaqModule),
          },
        ],
      },
    ]),
    MatDividerModule,
    SideNavModule,
    HeaderModule,
  ],
})
export class DashboardModule {}
