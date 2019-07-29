import {Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {PermisoEntity} from "./permiso.entity";
import {RolEntity} from "./rol.entity";

@Entity('db_Rol_Permiso')
export class RolPermisoEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(
        type => PermisoEntity,
        permiso => permiso.permisito
    )
    permiso:number

    @ManyToOne(
        type => RolEntity,
        rol => rol.rolpermiso
    )
    rol:number;
}