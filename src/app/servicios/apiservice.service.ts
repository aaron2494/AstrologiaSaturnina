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
  private idCarta = new BehaviorSubject<number>(0)
  idCarta$ = this.idCarta.asObservable()

  cartaActualizada = new EventEmitter();


  constructor(private http:HttpClient) { }
  

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

  getCartas():Observable<Cartas>{
    return this.http.get<Cartas>(`${this.url}/carta`)
  }

  editarCarta(id:number, carta:CartaDTO):Observable<CartaDTO>{
    return this.http.put<CartaDTO>(`${this.url}/carta?id=${id}`, carta)
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
