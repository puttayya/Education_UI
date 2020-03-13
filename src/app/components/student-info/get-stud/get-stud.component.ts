import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { student_interface } from '../_interface/stud.model';
import { RegistrationService } from '../../../registration.service';
import { StudentInfoComponent } from '../student-info.component';

@Component({
  selector: 'app-get-stud',
  templateUrl: './get-stud.component.html',
  styleUrls: ['./get-stud.component.css']
})
export class GetStudComponent implements OnInit {

  public displayedColumns = ['id', 'stud_id', 'stud_app_date','stud_first_name', 'update', 'delete'];

  public dataSource = new MatTableDataSource<student_interface>();

  constructor(private _registrationService : RegistrationService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  public getAllStudents = () => {
    this._registrationService.registerGetStud()
    .subscribe(res => {
      this.dataSource.data = res as student_interface[],
      response => console.log('Success!',response),
              error => console.error('Error!',error)
    })
  }

  // allStudents : any;

  // getAllStudents(){
  //   this._registrationService.registerGetStud().subscribe(res => this.allStudents = res.data, error => console.log('ERROR',error)
  //   );
  // }

  
  // public redirectToDetails = (id: Number) => {
    
  // }
 
  public redirectToUpdate = (id: Number) => {
    
  }
 
  public redirectToDelete = (id: Number) => {
    
  }
}
