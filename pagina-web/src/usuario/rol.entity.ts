import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('db_Rol')
export class RolEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length:100,
        name:'nombre'
    })
    rolNombre:string;

}