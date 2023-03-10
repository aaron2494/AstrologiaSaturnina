import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiserviceService } from 'src/app/servicios/cartas.service';
import { OpendialogComponent } from '../opendialog/opendialog.component';
import { ModalCartaComponent } from '../modal-carta/modal-carta.component';
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
    }))
    
  }

  abrirDialogo(){
    const dialogRef = this.dialog.open(ModalCartaComponent, {
      width:'350px'
    })
    dialogRef.afterClosed().subscribe((data => {
      this.cerrarDialogo()
    }))
  }

  cerrarDialogo(): void {
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    this.token = this.apiService.getToken()
  }

}
