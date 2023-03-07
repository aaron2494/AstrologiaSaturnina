export interface RespuestaAutenticacion {
  token: string;
  fechaExpiracion: string;
}

export interface Cartas {
  id: number;
  titulo: string;
  nombre: string;
  descripcion: string;
}

export interface CartaDTO{
    titulo:string;
    nombre:string;
    descripcion:string;
}
