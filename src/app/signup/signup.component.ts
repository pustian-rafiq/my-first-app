import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupDialogComponent } from './signup-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SignupDialogComponent);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
// })
// export class DialogElementsExampleDialog {}
