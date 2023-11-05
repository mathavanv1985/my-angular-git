import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { Employee } from './Models/emplyoee';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formbuildergroup : FormGroup;
employeearry : Employee[] = [];
  constructor (private empservice : EmployeeService,private fb : FormBuilder){
    this.formbuildergroup = this.fb.group({
      id : [""],
      name : [""],
      mobileNo : [""],
      emailID : [""]
    })
  }

  ngOnInit(): void {
    
   this.getemployeee();
  }
  getemployeee()
  {
    this.empservice.getemployee().subscribe(Response =>
      {
        this.employeearry =Response;
        console.log(Response);
      })
  }
  title = 'myangular';
  Onsubmit()
  {
    if(this.formbuildergroup.value.id !=null && this.formbuildergroup.value.id !="")
    {
      this.empservice.updateemployee(this.formbuildergroup.value).subscribe(Response =>{
        console.log(Response);
        this.getemployeee();
        this.formbuildergroup.setValue({
          id : "",
        name : "",
        mobileNo : "",
        emailID : ""
        })
      })
    }
    else
    {
    this.empservice.createemployee(this.formbuildergroup.value).subscribe(Response =>{
      console.log(Response);
      this.getemployeee();
      this.formbuildergroup.setValue({
        id : "",
      name : "",
      mobileNo : "",
      emailID : ""
      })
    })
  }
  }
  filform(emp : Employee)
  {
    this.formbuildergroup.setValue({
      id : emp.id,
    name : emp.name,
    mobileNo : emp.mobileNo,
    emailID : emp.mobileNo
    })
  }
  deleteemp(id : string)
  {
    this.empservice.deleteemployee(id).subscribe(Res =>{
      console.log(Res);
    })
  }
}
