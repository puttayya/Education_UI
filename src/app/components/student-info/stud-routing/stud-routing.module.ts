import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GetStudComponent } from '../get-stud/get-stud.component';


const routes: Routes = [
  { path: 'getstud', component: GetStudComponent }
];



@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class StudRoutingModule { }

export const studRoutingComponent = [GetStudComponent];