import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {RolPermisoEntity} from "./rol-permiso.entity";

@Entity('db_Permiso')
export class PermisoEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length:100,
        name:'nombre'
    })
    nombrePermiso:string;

    @OneToMany(
        type => RolPermisoEntity,
        rol => rol
    )
    permiso: RolPermisoEntity[]
}