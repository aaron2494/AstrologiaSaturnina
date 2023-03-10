import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cartas } from 'src/app/interfaces/respuesta';
import { ApiserviceService } from 'src/app/servicios/cartas.service';
import { ModalEditarComponent } from '../modal-editar/modal-editar.component';
import { OpendialogComponent } from '../opendialog/opendialog.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  cartas: Cartas[] = [];
  id: number | undefined;

  ngOnInit(): void {
    this.getCartas();
    this.apiService.cartaActualizada.subscribe(() => {
      this.getCartas();
    });
  }

  constructor(public dialog: MatDialog, private apiService: ApiserviceService) {}

  openDialog(id: number) {
    this.id = id;
    this.apiService.emitId(this.id);
    this.dialog.open(OpendialogComponent, {
      width: "350px",
    });
  }

  editarDialog(id: number) {
    if (id) {
      this.apiService.cartaId = id;
      console.log(this.apiService.cartaId);
      const dialogRef = this.dialog.open(ModalEditarComponent, {
        width: "500px",
        height: "300px",
      });
  
      dialogRef.afterClosed().subscribe((data) => {
        this.apiService.cartaId = undefined;
        console.log(this.apiService.cartaId);
      });
    } else {
      console.log("El ID de la carta es nulo o indefinido");
    }
  }
  getCartas() {
    this.apiService.getCartas().subscribe((data: any) => {
      this.cartas = data;
      this.apiService.emitCartas(this.cartas);
    });
  }
}