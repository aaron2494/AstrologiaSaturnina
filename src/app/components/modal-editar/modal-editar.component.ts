import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiserviceService } from 'src/app/servicios/apiservice.service';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {
  forms!:FormGroup


  constructor(private formBuilder:FormBuilder, private apiService:ApiserviceService) {

    this.forms = this.formBuilder.group({
      titulo:['',Validators.required],
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
    })
   }

  ngOnInit(): void {

  }


  enviarDatos() {
    const carta = {
      titulo: this.forms.value.titulo,
      nombre: this.forms.value.nombre,
      descripcion: this.forms.value.descripcion,
    };
    this.apiService.idCarta$.subscribe((id) => {
      this.apiService.editarCarta(id, carta).subscribe((data) => {
        console.log(data);
        this.apiService.cartaActualizada.emit();
      });
    }, (err) =>{
      console.log(err)
    });
  }
}
