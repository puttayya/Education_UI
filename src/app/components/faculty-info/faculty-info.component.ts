// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-faculty-info',
//   templateUrl: './faculty-info.component.html',
//   styleUrls: ['./faculty-info.component.css']
// })
// export class FacultyInfoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit , inject} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { RegistrationService } from '../../registration.service';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { DialogStudComponent } from './dialog-stud/dialog-stud.component';

@Component({
  selector: 'app-faculty-info',
  templateUrl: './faculty-info.component.html',
  styleUrls: ['./faculty-info.component.css']
})


export class FacultyInfoComponent implements OnInit {
  
  facuForm : FormGroup;

  constructor(private fb: FormBuilder, private _registrationService : RegistrationService, /* public dialog: MatDialog*/) { }

  ngOnInit(){
    this.facuForm = this.fb.group({
      fac_app_date       : [''],
      fac_first_name     : [''],
      fac_last_name      : [''],
      fac_father_name    : [''],
      fac_dob            : [''],
      fac_gender         : [''],
      fac_rel_caste      : [''],
      fac_adhaar_no      : [''],
      fac_address        : [''],
      fac_city           : [''],
      fac_district       : [''],
      fac_state          : [''],
      fac_contact_1      : [''],
      fac_contact_2      : [''],
      fac_graduate       : [''],
      fac_grad_combi     : [''],
      fac_post_grad      : [''],
      fac_pg_combi       : [''],
      fac_other_qual     : [''],
      fac_description    : ['']     
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
        console.log(this.facuForm.value);
        this._registrationService.registerFacu(this.facuForm.value)
            .subscribe(
              response => console.log('Success!',response),
              error => console.error('Error!',error)
            );
            this.facuForm.reset();
      }

  // onReset(){
  //   this.studForm.reset();
  // }
}


