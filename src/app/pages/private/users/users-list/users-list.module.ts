import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersListPage } from './users-list.page';
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [UsersListPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: UsersListPage,
        data: {
          title: "Users List",
          description: "",
          robots: "index, follow",
        },
      },
    ]),
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class UsersListModule {}
