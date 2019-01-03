import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


export interface DialogData {
  animal:string;
  name:string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  animal:string;
  name:string;

  constructor(public dialog:MatDialog,iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) {
    iconRegistry.addSvgIcon(
      "home",
      sanitizer.bypassSecurityTrustResourceUrl('src/assets/baseline-home-24px.svg'));
   }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog , {
      width: '400px',
      height:'500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
    menulist=[
    {list:'SuperAdmin'},
    {list:'Admin'},
    {list:'WearHouseAdmin'},
    {list:'update'},
    {list:'Report'},
    {list:'Product'},
    {list:'Delivery'},
    {list:'Order List'},
    {list:'Product List'},
    {list:'Product Price'},
    {list:'ReferalCode'},
    {list:'Cashback'},
  ]
}
@Component({
  selector: 'dialog',
  templateUrl: 'dialog.html',
})
export class Dialog {

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject (MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}