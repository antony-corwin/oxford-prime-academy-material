import { Component, OnInit, AfterViewInit, ViewChild, Inject } from "@angular/core";
import { Path } from "@core/structs";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface Role {
  value: string;
  viewValue: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

/** Constants used to fill up our data base. */
const ROLES: Role[] = [
  { value: "all", viewValue: "All" },
  { value: "student", viewValue: "Student" },
  { value: "parent", viewValue: "Parent" },
  { value: "teacher", viewValue: "Teacher" },
];

const STATUS: string[] = ["Active", "Pending"];

@Component({
  templateUrl: "./users-list.page.html",
  styleUrls: ["./users-list.page.scss"],
})
export class UsersListPage implements OnInit, AfterViewInit {
  path = Path;
  displayedColumns: string[] = ["id", "name", "email", "role", "status", "controls"];
  dataSource: MatTableDataSource<UserData>;
  roles = ROLES;
  pageIndex: number = 0;
  pageSize: number = 10;


  animal: string | undefined;
  name: string | undefined;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '480px',
      height: '428px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  return {
    id: id.toString(),
    name: "John Doe",
    email: "john.doe@gmail.com",
    role: ROLES[Math.round(Math.random() * (ROLES.length - 1))].viewValue,
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
  };
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}



  onNoClick(): void {
    this.dialogRef.close();
  }

}
