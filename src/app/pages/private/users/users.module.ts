import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { Path } from '@core/structs';
import { SubNavModule } from "@components/sub-nav/sub-nav.module";

@NgModule({
  declarations: [UsersPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: UsersPage,
        data: {
          title: "Users",
          description: "",
          robots: "index, follow",
        },
        children: [
          {
            path: "",
            redirectTo: Path.UsersList,
            pathMatch: "full",
          },
          {
            path: Path.UsersList,
            loadChildren: () =>
              import("@pages/private/users/users-list/users-list.module").then(
                (m) => m.UsersListModule,
              ),
          },
          {
            path: Path.Invitation,
            loadChildren: () =>
              import("@pages/public/info/curriculum/curriculum.module").then(
                (m) => m.CurriculumModule,
              ),
          },
          {
            path: Path.OnlineRequests,
            loadChildren: () =>
              import(
                "@pages/public/info/admissions/admissions.module"
                ).then((m) => m.AdmissionsModule),
          },
          {
            path: Path.Documents,
            loadChildren: () =>
              import(
                "@pages/public/info/faq/faq.module"
                ).then((m) => m.FaqModule),
          },
          {
            path: Path.Archive,
            loadChildren: () =>
              import(
                "@pages/public/info/faq/faq.module"
                ).then((m) => m.FaqModule),
          },
        ],
      },
    ]),
    SubNavModule,
  ],
})
export class UsersModule {
}
