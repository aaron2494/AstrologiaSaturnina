export interface RespuestaAutenticacion {
  token: string;
  fechaExpiracion: string;
}

export interface Cartas {
  id: number;
  titulo: string;
  nombre: string;
  descripcion: string;
  precio:number;
}

export interface CartaDTO{
    titulo:string;
    nombre:string;
    descripcion:string;
    precio:number;
}
