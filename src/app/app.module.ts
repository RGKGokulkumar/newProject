import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ListItemComponent } from './list-item/list-item.component';
import {MatListModule} from '@angular/material/list';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { DialogComponent } from './dialog/dialog.component';
import{RouterModule,Routes} from '@angular/router'
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { CreateformComponent } from './createform/createform.component';
import { ListwearhouseComponent } from './listwearhouse/listwearhouse.component';
import { TemplateComponent } from './template/template.component';

const appRoutes:Routes=[
  {path:'save',component:AppComponent},
  {path:'logout',component:ListItemComponent},
  {path:'Login',component:LoginComponent},
  {path:'Create_Form',component:CreateformComponent},
  {path:'List',component:ListwearhouseComponent},
  {path:'Template',component:TemplateComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    NavigationComponent,
    DialogComponent,
    LoginComponent,
    CreateformComponent,
    ListwearhouseComponent,
    TemplateComponent
     ],
     entryComponents:[
      DialogComponent
     ],
    
  schemas:[
    NO_ERRORS_SCHEMA
  ],   
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    ScrollDispatchModule,
    FormsModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
