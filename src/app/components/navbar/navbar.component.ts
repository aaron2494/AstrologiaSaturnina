import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  forms!:FormGroup
  
  constructor(private fB:FormBuilder, private matDialog:MatDialog) {
    this.forms=this.fB.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
   }
   openDialog(){
    this.matDialog.open(LoginComponent,{
      width:'350px'
    })
  }

  ngOnInit(): void {
  }

}
