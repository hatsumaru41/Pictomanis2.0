import { Membership } from "./membership";
import { Rol } from "./rol";

export class usuario {
  idUsuario: number = 0;
  nameUsuario: string = "";
  lastName:string = "";
  numberUsuario:number = 0;
  emailUsuario:string= "";
  passwordUsuario:string = "";
  rol: Rol = new Rol();
  membership: Membership = new Membership();
}
