import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import{ViewEncapsulation} from '@angular/core';
import{RouterModule,Routes, RouterLink,Router, RouterOutlet} from '@angular/router'
import { from } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { CreateformComponent } from '../createform/createform.component';
import { ListwearhouseComponent } from '../listwearhouse/listwearhouse.component';
import { MAT_MENU_DEFAULT_OPTIONS_FACTORY } from '@angular/material/menu/typings/menu-directive';

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

  menulist=[
    {id: 1,list:'Login'},
    {id: 2,list:'Create Form'},
    {id: 3,list:'List'},
    {id: 4,list:'Template'},
  ]
  

  constructor(public dialog:MatDialog,iconRegistry:MatIconRegistry,sanitizer:DomSanitizer
    ,public router:Router) {
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
      position:{
        top:'3vw',left:'6vw'
      }
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  menuOption(menu):void{
    if (menu.id == 1) {
      this.router.navigate(['/Login']);  
    } else if (menu.id == 2) {
      this.router.navigate(['/Create_Form']);  
    } else if (menu.id == 3) {
      this.router.navigate(['/List']);  
    } else  {
      this.router.navigate(['/Template']);  
    }
  }
}