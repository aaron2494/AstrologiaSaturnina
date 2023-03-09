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
  cartas:Cartas[] = []
  id!:number
  
  
  ngOnInit(): void {
    this.getCartas();
    this.apiService.cartaActualizada.subscribe(() => {
      this.getCartas();
    });
  }

  constructor(private matDialog:MatDialog, private apiService:ApiserviceService ) { 
  }
  
  openDialog(id:number){
    this.id = id
    this.apiService.emitId(this.id)
    this.matDialog.open(OpendialogComponent,{
      width:'350px'
    })
  }

  getCartas(){
    this.apiService.getCartas().subscribe((data:any) =>{
      this.cartas = data
      this.apiService.emitCartas(this.cartas)
    })
  }

  editarDialog(id:number){
    this.id = id
    this.apiService.emitId(this.id)
    this.matDialog.open(ModalEditarComponent,{
      width:'350px'
    })
  }
 

}
