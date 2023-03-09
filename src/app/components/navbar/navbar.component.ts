import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiserviceService } from 'src/app/servicios/cartas.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  forms!:FormGroup
  token!:any
  
  constructor(private fB:FormBuilder, private dialog:MatDialog, private apiService:ApiserviceService) {
    this.forms=this.fB.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
   }
   openDialog(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width:'350px'
    })
    dialogRef.afterClosed().subscribe((data  =>{
      console.log(data)
    }))
    
  }

  ngOnInit(): void {
    this.token = this.apiService.getToken()
  }

}
