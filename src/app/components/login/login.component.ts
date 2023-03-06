import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  forms!:FormGroup
  email: any;
  constructor(private fB:FormBuilder) { 
    this.forms=this.fB.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  
  }
  enviarDatos(){
    console.log(this.forms)
  }


  ngOnInit(): void {
  }

}
