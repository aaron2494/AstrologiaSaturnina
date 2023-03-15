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
    this.cartas = [
      {
        id:1,
        nombre:'CARTA NATAL',
        titulo:'CARTA NATAL',
        descripcion:"Segun la astrologia la carta natal es el mapa del cielo a la hora de tu nacimiento.",
        precio:3000
      },
      {
        id:2,
        nombre:'Revolucion Solar',
        titulo:'Revolucion Solar',
        descripcion:"En astrología, la revolución solar es una de las lecturas predictivas más importantes y se la llama también carta solar anual porque la lectura se inicia cuando, desde la perspectiva de la Tierra, nuestro sol regresa a su posición natal, una vez completada su órbita alrededor del sol",
        precio:3000
      },
      {
        id:3,
        nombre:'Revolucion Lunar',
        titulo:'Revolucion Lunar',
        descripcion:"La revolución lunar es la carta astral calculada para el momento en el que la Luna vuelve a la misma posición natal empezando un nuevo ciclo, lo que ocurre cada 27-28 días aproximadamente, trece veces al año.",
        precio:3000
      },
      {
        id:3,
        nombre:'Tarot SI o NO',
        titulo:'Tarot SI O NO',
        descripcion:"Tirada de cartas que responde a una pregunta concreta y precisa. El TAROT para respuesta de SI o NO puede sacarte las dudas facilmente. Esta tirada nos sirve para que las cartas respondan a una pregunta muy concreta afirmativamente o negativamente",
        precio:3000
      },
      {
        id:4,
        nombre:'2 PREGUNTAS AL TAROT',
        titulo:'CARTA NATAL',
        descripcion:"Lo mejor del tarot es que puedes preguntar sobre cualquier cosa. No existe ninguna limitación en cuanto a los problemas que el tarot puede ayudarnos a resolver y entender, aunque normalmente se distinguen en cuatro ámbitos: amor, trabajo, dinero y salud.",
        precio:3000
      }
    ]
    // this.apiService.getCartas().subscribe((data: any) => {
    //   this.cartas = data;
    //   this.apiService.emitCartas(this.cartas);
    // });
  }
}