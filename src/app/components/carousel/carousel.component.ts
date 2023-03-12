import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cartas } from 'src/app/interfaces/respuesta';
import { ApiserviceService } from 'src/app/servicios/cartas.service';
import { ModalCartaComponent } from '../modal-carta/modal-carta.component';
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
      this.getCartas()
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
      
      const dialogRef = this.dialog.open(ModalCartaComponent, {
        width: "500px",
        height: "300px",
      });
  
      dialogRef.afterClosed().subscribe((data) => {
        this.apiService.cartaId = undefined;
  
      });
    } else {
  
    }
  }
  getCartas() {
    this.apiService.getCartas().subscribe((data: any) => {
      this.cartas = data;
      this.apiService.emitCartas(this.cartas);
    });
  }
}