import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiserviceService } from 'src/app/servicios/cartas.service';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {
  forms!: FormGroup;
  id: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiserviceService,
    private dialog: MatDialog
  ) {
    this.forms = this.formBuilder.group({
      titulo: ["", Validators.required],
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      precio: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.apiService.cartaId;

  }

  cerrarDialogo(): void {
    this.dialog.closeAll();
    console.log(this.id);
  }

  enviarDatos() {
    const carta = {
      titulo: this.forms.value.titulo,
      nombre: this.forms.value.nombre,
      descripcion: this.forms.value.descripcion,
      precio: this.forms.value.precio,
    };
  
    if (this.id) {
      this.apiService.editarCarta(this.id, carta).subscribe((data) => {
        console.log(data, "editando");
        this.apiService.cartaActualizada.emit();
      });
    } else {
      this.apiService.createCarta(carta).subscribe((data) => {
        console.log(data, "creando");
        this.apiService.cartaActualizada.emit();
      });
    }
  }
}