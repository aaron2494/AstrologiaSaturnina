import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/servicios/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  forms!:FormGroup
  email: any;
  constructor(private fB:FormBuilder, private apiService:ApiserviceService) { 
    this.forms=this.fB.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  
  }
  enviarDatos(){
    const {email, password} = this.forms.value 
    this.apiService.login(email, password)
    .subscribe((data:any) =>{
      this.apiService.token = data.token 
      localStorage.setItem('token', this.apiService.token)
    })

  }


  ngOnInit(): void {
  }

}
