import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import{ViewEncapsulation} from '@angular/core';
import { from } from 'rxjs';

export interface DialogData {
  animal:string;
  name:string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation:ViewEncapsulation.None
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
    const dialogRef = this.dialog.open(DialogComponent , {
      width: '30vw',
      data: {name: this.name, animal: this.animal},
      panelClass:'custom-dialog-container',
      
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
