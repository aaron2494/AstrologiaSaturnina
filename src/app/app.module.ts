import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import {MatButtonModule}from '@angular/material/button';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatCardModule}from '@angular/material/card';
import {MatMenuModule, matMenuAnimations} from '@angular/material/menu';
import { InformacionComponent } from './components/informacion/informacion.component'
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ MatOptionModule}from '@angular/material/core';
import{ MatSelectModule}from '@angular/material/select';
import{ MatDialogModule}from '@angular/material/dialog';
import{ MatInputModule}from '@angular/material/input';
import { OpendialogComponent } from './components/opendialog/opendialog.component';
import { AlertsComponent } from './components/alerts/alerts.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    InformacionComponent,
    OpendialogComponent,
    AlertsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
     MatDialogModule,
     MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
