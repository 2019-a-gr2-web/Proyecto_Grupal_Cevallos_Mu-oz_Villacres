import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioRolEntity} from "./usuario-rol.entity";
import {RolPermisoEntity} from "./rol-permiso.entity";

@Entity('db_Rol')
export class RolEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length:100,
        name:'nombre_rol'
    })
    rolNombre:string;

    @OneToMany(
        type => UsuarioRolEntity,
        rol => rol
    )
    rol: UsuarioRolEntity[];

    @OneToMany(
        type => RolPermisoEntity,
        rol => rol
    )
    rolpermiso: RolPermisoEntity[]

}