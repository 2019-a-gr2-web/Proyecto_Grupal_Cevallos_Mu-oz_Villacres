import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {RolPermisoEntity} from "./rol-permiso.entity";

@Entity('db_Permiso')
export class PermisoEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length:100,
        name:'nombre_permiso'
    })
    nombrePermiso:string;

    @OneToMany(
        type => RolPermisoEntity,
        rolpermiso => rolpermiso.permiso
    )
    permisito: RolPermisoEntity[]
}