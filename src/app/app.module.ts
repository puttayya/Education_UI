import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { FormGroup,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { routingComponent } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { FacultyInfoComponent } from './components/faculty-info/faculty-info.component';
import {MatNativeDateModule} from '@angular/material/core';
import { DialogStudComponent } from './components/student-info/dialog-stud/dialog-stud.component';
import { GetStudComponent } from './components/student-info/get-stud/get-stud.component';
// import {studRoutingComponent} from './components/student-info/stud-routing/stud-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    StudentInfoComponent,
    FacultyInfoComponent,
    DialogStudComponent,
    GetStudComponent,
    // studRoutingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  entryComponents: [AppComponent,StudentInfoComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
