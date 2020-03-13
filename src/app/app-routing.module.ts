import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyInfoComponent } from './components/faculty-info/faculty-info.component';
import { StudentInfoComponent } from  './components/student-info/student-info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GetStudComponent } from './components/student-info/get-stud/get-stud.component';

const routes: Routes = [
{ path: 'Home', component: HomeComponent, data: { title: 'Home' } },
{ path: 'Login', component: LoginComponent, data: { title: 'Login' } },
{ path: 'Dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
{ path: 'Student', loadChildren: () => import('./components/student-info/stud-routing/stud-routing.module').then(m => m.StudRoutingModule), component: StudentInfoComponent, data: { title: 'Students information' } },
{ path: 'Faculty', component: FacultyInfoComponent, data: { title: 'Faculty information' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [HomeComponent, StudentInfoComponent, FacultyInfoComponent, DashboardComponent];