import { Component, OnInit , inject} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { RegistrationService } from '../../registration.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogStudComponent } from './dialog-stud/dialog-stud.component';
import {GetStudComponent} from './get-stud/get-stud.component';



@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})

export class StudentInfoComponent implements OnInit {

  studForm : FormGroup;

  constructor(private fb: FormBuilder, private _registrationService : RegistrationService,  public dialog: MatDialog) { }

  ngOnInit(){
    this.studForm = this.fb.group({
      stud_app_date       : [''],
      stud_first_name     : [''],
      stud_last_name      : [''],
      stud_father_name    : [''],
      stud_dob            : [''],
      stud_gender         : [''],
      stud_rel_caste      : [''],
      stud_income         : [''],
      stud_address        : [''],
      stud_city           : [''],
      stud_district       : [''],
      stud_state          : [''],
      stud_contact_1      : [''],
      stud_contact_2      : [''],
      stud_graduate       : [''],
      stud_grad_combi     : [''],
      stud_post_grad      : [''],
      stud_pg_combi       : [''],
      stud_other_qual     : [''],
      stud_course         : [''],
      stud_course_batch_time  : [''],
      stud_description    : [''],
      stud_adhaar_no      : ['']
    });

  
  }

  

//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogStudComponent, {
//       data: {
       
//       }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.studForm = result;
//     });
//   }

// }

  onSubmit(){    
        console.log(this.studForm.value);
        this._registrationService.registerStud(this.studForm.value)
            .subscribe(
              response => console.log('Success!',response),
              error => console.error('Error!',error)
            );
            this.studForm.reset();
      }

  // onReset(){
  //   this.studForm.reset();
  // }
}


