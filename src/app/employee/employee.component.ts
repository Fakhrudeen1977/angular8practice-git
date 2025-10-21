import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl }
from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

   employeeForm: FormGroup;
   contactPreferenceOption:boolean=true;
   selectedEmailorPhone:string;
   constructor(){

   }
    ngOnInit() {
        this.employeeForm = new FormGroup({
            fullName: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]),
            contactPreference:new FormControl('',Validators.required),
            email: new FormControl('',Validators.required),
            phone: new FormControl('',Validators.required),            
            skills : new FormGroup({
            skillName: new FormControl("",Validators.required),
            experienceInYears: new FormControl("",[Validators.required, Validators.min(0), Validators.max(30)]),
            proficiency: new FormControl("",Validators.required)
            
        }) 

           
        });      

    }


      public save():void{       
        console.log(this.employeeForm.value);
    }
    

      public reset():void{
        this.employeeForm.reset();        
    }
     
     public get fullName(){
         return this.employeeForm.get('fullName');
     }

     public onContactPreference(selectedValue:string){
         this.contactPreferenceOption=false;
         this.selectedEmailorPhone=selectedValue;
         if(selectedValue==="Email"){
             this.contactPreferenceOption=true;
         }
         else
         this.contactPreferenceOption=false;
     }
   
     public loadData():void{
         this.selectedEmailorPhone="Email" ;
                  
         this.employeeForm.setValue({
            fullName:"Fakhrudeen Ali Ahamed",
            contactPreference:this.selectedEmailorPhone,
            email:"fakhrudeen77@gmail.com",
            phone:8015409728,       
           
            skills:{
                skillName:"Java J2EE",
                experienceInYears:"13",
                proficiency:"Intermediate"
            }
         });
     }
   
    


}
