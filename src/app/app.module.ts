import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
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
    ScrollDispatchModule
  ],

  providers: [],
  bootstrap: [ListItemComponent]
})
export class AppModule { }
