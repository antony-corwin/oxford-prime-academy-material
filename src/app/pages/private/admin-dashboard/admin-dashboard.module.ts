import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminDashboardPage } from "./admin-dashboard.page";
import { MatDividerModule } from "@angular/material/divider";
import { SideNavModule } from "@components/side-nav/side-nav.module";

import { HeaderModule } from "@components/header/header.module";
import { Path } from "@core/structs";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [AdminDashboardPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: AdminDashboardPage,
        data: {
          title: "Dashboard",
          robots: "noindex, nofollow",
        },
        // TODO fix children!
        children: [
          {
            path: Path.CMS,
            loadChildren: () =>
              import("@app/pages/public/info/curriculum/curriculum.module").then(
                (m) => m.CurriculumModule,
              ),
          },
          {
            path: Path.Videos,
            loadChildren: () =>
              import(
                "@app/pages/public/info/admissions/admissions.module"
                ).then((m) => m.AdmissionsModule),
          },
          {
            path: Path.Users,
            loadChildren: () =>
              import(
                "@app/pages/private/users/users.module"
                ).then((m) => m.UsersModule),
          },
          {
            path: Path.School,
            loadChildren: () =>
              import(
                "@app/pages/public/info/faq/faq.module"
                ).then((m) => m.FaqModule),
          },
          {
            path: Path.Billing,
            loadChildren: () =>
              import(
                "@app/pages/public/info/faq/faq.module"
                ).then((m) => m.FaqModule),
          },
          {
            path: Path.Reports,
            loadChildren: () =>
              import(
                "@app/pages/public/info/faq/faq.module"
                ).then((m) => m.FaqModule),
          },
          {
            path: Path.Accounting,
            loadChildren: () =>
              import(
                "@app/pages/public/info/faq/faq.module"
                ).then((m) => m.FaqModule),
          },
        ],
      },
    ]),
    MatDividerModule,
    SideNavModule,
    HeaderModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
})
export class AdminDashboardModule {
}
