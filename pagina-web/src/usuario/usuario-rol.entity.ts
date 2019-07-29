import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {RolEntity} from "./rol.entity";
import {UsuarioEntity} from "./usuario.entity";

@Entity('db_Usuario_Rol')
export class UsuarioRolEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(
        type => RolEntity,
        rol => rol.rol
    )
    rol:number;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.rol
    )
    usuario:number;
}