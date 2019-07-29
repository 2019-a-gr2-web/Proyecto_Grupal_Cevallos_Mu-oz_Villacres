import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}