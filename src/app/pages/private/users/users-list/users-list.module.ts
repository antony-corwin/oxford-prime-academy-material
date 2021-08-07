import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogOverviewExampleDialog, UsersListPage } from "./users-list.page";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [UsersListPage, DialogOverviewExampleDialog],
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
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
  ],
})
export class UsersListModule {}
