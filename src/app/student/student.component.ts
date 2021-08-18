import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {ConfigService} from '../config.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public studentForm!: FormGroup;
  public FormList:any=[];
  public isSubmit:boolean=false;
  public students:any=[];
  public studentid:any=0;
  public studentData:any;

  public department =
  [
    {name: "IT", id: "1"},
    {name: "Mech", id: "2"}
  ];

  // public department = ["IT", "Mechanical", "Electronics"]



  constructor(private formBuilder: FormBuilder,private ConfigS: ConfigService,public ActivatedRoute:ActivatedRoute) {

    this.ActivatedRoute.params.subscribe(val => { 
      console.log(val.id)
      this.studentid=val.id;   
    });

    this.studentForm = this.formBuilder.group({
      firstname: ['',[Validators.required]],
      lastname:[null,[Validators.min(10)]],
      email: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
      department: [ '',[Validators.required]],
      address: ['',[Validators.required]],
      zipcode: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      document: ['',[Validators.required]],

    });

    this.getStudentbyId();
    console.log(this.studentForm);


   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.studentForm)
    this.isSubmit = true;
    if(this.studentForm.valid){

      this.ConfigS.postStudents(this.studentForm.value).subscribe((res:any)=>{
        console.log(res);
        
      },(err)=>{
        console.log(err);
      })
      this.FormList.push(this.studentForm.value);
      this.isSubmit = false;
      this.studentForm.reset();
      this.studentForm.controls.department.setValue('SELECT');

      
    }else{
      alert("Please fill all fields.")     
    }
    console.log(this.FormList);
    // this.students = this.FormList;
 


  }
  getStudentbyId(){
    if(this.studentid>0){

      this.ConfigS.editStudents(this.studentid).subscribe((res:any)=>{
        
        this.studentForm.controls.firstname.setValue(res.firstname);
        this.studentForm.controls.lastname.setValue(res.lastname);
        this.studentForm.controls.email.setValue(res.email);
        this.studentForm.controls.address.setValue(res.address);
        this.studentForm.controls.mobile.setValue(res.mobile);
        this.studentForm.controls.zipcode.setValue(res.zipcode);
        this.studentForm.controls.firstname.setValue(res.firstname);
        this.studentForm.controls.gender.setValue(res.gender);
        this.studentForm.controls.department.setValue(res.department);
        this.studentForm.controls.document.setValue(res.document);




        
        
    },(err)=>{
  
    })
      
    }
  }
}
