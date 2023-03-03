import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-opendialog',
  templateUrl: './opendialog.component.html',
  styleUrls: ['./opendialog.component.css']
})
export class OpendialogComponent implements OnInit {
forms!:FormGroup

  constructor(private fB:FormBuilder ) {
    this.forms=this.fB.group({
      name:['',Validators.required],
      option:['',Validators.required],
      comment:['']
    })
   }
   
  ngOnInit(): void {
  }
 
  enviarDatos(){   
      let nombre= this.forms.value.name;
      let option= this.forms.value.option;
      let comment=this.forms.value.comment; 
       window.open("https://api.whatsapp.com/send?phone=1164115327&text=Hola%20AstrologiaSaturnina%0Ami%20nombre%20es%20"+nombre + "%0Avengo%20por%20la%20" + option +"%0A"+ comment) 
   }
   
}

