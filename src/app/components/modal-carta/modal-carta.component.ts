import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiserviceService } from 'src/app/servicios/cartas.service';

@Component({
  selector: 'app-modal-carta',
  templateUrl: './modal-carta.component.html',
  styleUrls: ['./modal-carta.component.css']
})
export class ModalCartaComponent implements OnInit {
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
    if (this.id) {
      this.apiService.getCarta(this.id).subscribe((carta) => {
        this.forms.patchValue({
          titulo: carta.titulo,
          nombre: carta.nombre,
          descripcion: carta.descripcion,
          precio: carta.precio,
        });
      });
    }
  }

  cerrarDialogo(): void {
    this.dialog.closeAll();

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
        this.apiService.cartaActualizada.emit();
      });
    } else {
      this.apiService.createCarta(carta).subscribe((data) => {
        this.apiService.cartaActualizada.emit();
      });
    }
  }
}