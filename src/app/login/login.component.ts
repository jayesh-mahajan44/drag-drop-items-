import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GlobelServiceService } from '../globel-service.service';
import { Router } from '@angular/router';
import { __await } from 'tslib';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;


  constructor(public service:GlobelServiceService,private router:Router) { }

  ngOnInit(): void { 
    this.initilizedLoginForm()
  
  }

  initilizedLoginForm(){
    this.form= new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    })
  }

  signIn(){
    if(!this.form.value.username && !this.form.value.password){
      return
    }
     for( let i=0;i<this.service.users.length;i++ ){

     if ( this.form.value.username == this.service.users[i].username && this.form.value.password ==  this.service.users[i].password ){
console.log(this.service.users[i])
this.service.setLocalStorage('User',this.service.users[i]);
this.service.user=this.service.users[i]
     this.router.navigate(['list']);
     
      }

    }

  }


}
