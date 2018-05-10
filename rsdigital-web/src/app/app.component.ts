import { Component, Inject, OnInit } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app'
  languaje = 'Español'
  user: any

  constructor(public dialog: MatDialog, private route: Router) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { languaje: this.languaje }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.languaje = result || this.languaje
    })
  }

  ngOnInit() {
    const session = window.localStorage.getItem('session')
    // if (!session) { return this.route.navigate(['login']) }
    this.user = JSON.parse(session)
  }

  logout() {
    window.localStorage.removeItem('session')
    this.user = null
    this.route.navigate(['login'])
  }
}

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog.component.html',
  styles: [`.example-radio-group {
    display: inline-flex;
    flex-direction: column;
  }

  .example-radio-button {
    margin: 5px;
  }

  .example-selected-value {
    margin: 15px 0;
  }`]
})
export class DialogComponent {

  constructor( public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    console.log(this.data.languaje)
    this.dialogRef.close(this.data.languaje)
  }

}
