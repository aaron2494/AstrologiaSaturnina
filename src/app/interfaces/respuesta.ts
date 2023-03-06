export interface RespuestaAutenticacion {
  token: string;
  fechaExpiracion: string;
}

export interface Cartas {
  Id: number;
  titulo: string;
  nombre: string;
  descripcion: string;
}

export interface CartaDTO{
    titulo:string;
    nombre:string;
    descripcion:string;
}
