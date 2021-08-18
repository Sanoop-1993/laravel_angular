import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {ConfigService} from '../config.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
  public students:any=[];


  constructor(private formBuilder: FormBuilder,private ConfigS: ConfigService,private Router:Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.ConfigS.getStudents().subscribe((res:any)=>{
        this.students = (res)??[];
    },(err)=>{

    })
  }
  deleteStudent(id:any)
  {
    this.ConfigS.deleteStudents(id).subscribe((res:any)=>{
      this.getStudents();
  },(err)=>{

  })
  }

  editStudent(id:any)
  {
   
    this.Router.navigate(['student/'+id]);


  }
  

  


 

}
