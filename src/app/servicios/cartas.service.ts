import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartaDTO, Cartas, RespuestaAutenticacion } from '../interfaces/respuesta';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  url = environment.baseUrl;
  token!:string
  private precio = new BehaviorSubject<number>(0)
  cartaId:number | undefined
  precio$ = this.precio.asObservable()

  private idCarta = new BehaviorSubject<number>(0)
  idCarta$ = this.idCarta.asObservable()

  private cartas = new BehaviorSubject<[]>([])
  cartas$ = this.cartas.asObservable()

  cartaActualizada = new EventEmitter();

  constructor(private http:HttpClient) { }

  
  estaLogueado(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true;
  }
  

  login(email:string, password:string):Observable<RespuestaAutenticacion>{
    return this.http.post<RespuestaAutenticacion>(`${this.url}/cuentas/login`, {email, password})
    .pipe(
      tap(resp =>{
        localStorage.setItem('token', resp.token)
      })
    )
  }

  emitId(id:number){
    this.idCarta.next(id)
  }

  emitPrecio(precio:number){
    this.precio.next(precio)
  }

  emitCartas(cartas:any){
    this.cartas.next(cartas)
  }

  getCartas():Observable<Cartas>{
    return this.http.get<Cartas>(`${this.url}/carta`)
  }

  createCarta(carta:CartaDTO):Observable<CartaDTO>{
    return this.http.post<CartaDTO>(`${this.url}/carta/crear`, carta)
  }

  getCarta(id:number){
    return this.http.get<Cartas>(`${this.url}/carta/id?id=${id}`)
  }

  editarCarta(id:number, carta:CartaDTO):Observable<CartaDTO>{
    return this.http.put<CartaDTO>(`${this.url}/carta/editar?id=${id}`, carta)
    .pipe(
      tap(() => {
        this.cartaActualizada.emit()
      })
    )
  }
  
  getToken(){
    return localStorage.getItem('token')
  }
}
