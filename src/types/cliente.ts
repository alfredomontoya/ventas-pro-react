export interface TelefonoCliente {
  numero: string;
  es_principal: boolean;
}

export interface CorreoCliente {
  email: string;
  es_principal: boolean;
}

export interface DireccionCliente {
  direccion: string;
  es_principal: boolean;
}

export interface Cliente {
  id: number;
  ci: string;
  nombres: string;
  apellido_paterno: string;
  apellido_materno?: string;
  fecha_nacimiento?: string;
  estado: boolean;
  created_at?: string;
  updated_at?: string;

  telefonos: TelefonoCliente[];
  correos: CorreoCliente[];
  direcciones: DireccionCliente[];
}
