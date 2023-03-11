import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cartas } from 'src/app/interfaces/respuesta';
import { ApiserviceService } from 'src/app/servicios/cartas.service';

@Component({
  selector: 'app-opendialog',
  templateUrl: './opendialog.component.html',
  styleUrls: ['./opendialog.component.css']
})
export class OpendialogComponent implements OnInit {
forms!:FormGroup
opciones:string[] = []
precio!:number
cartas:Cartas[] = []
descripcion:string = ''

  constructor(private fB:FormBuilder, private apiService:ApiserviceService) {
    this.forms=this.fB.group({
      name:['',Validators.minLength(10)],
      date:['',Validators.required],
      time:['',Validators.required],
      comment:[''],
    })
   }
   
  ngOnInit(): void {
    this.apiService.precio$.subscribe((precio =>{
      this.precio = precio
    }))
   this.apiService.idCarta$.subscribe((id =>{
    this.apiService.getCarta(id).subscribe(data =>{
      this.descripcion = data.descripcion
      this.apiService.emitPrecio(data.precio)
    })
   }))
  }
 
  enviarDatos(){   
      let nombre= this.forms.value.name;
      let descripcion = this.descripcion 
      let comment=this.forms.value.comment; 
      let date =this.forms.value.date;
      let time =this.forms.value.time;
      let precio = this.precio
       window.open("https://api.whatsapp.com/send?phone=+5491156392380&text=Hola%20AstrologiaSaturnina%0Ami%20nombre%20es%20" + nombre + "%0Avengo%20por%20la%20" + descripcion + "%0Ami%20fecha%20de%20nacimiento%20es:%0A"+ date +"%0Ami%20Hora%20de%20nacimiento%20es:%0A" + time +"%0A" + "%20El%20Precio%20es:%20" + precio + "$" + "%0A" + comment) 
   }
   
}

