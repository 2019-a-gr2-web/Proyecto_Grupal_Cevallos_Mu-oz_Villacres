import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('db_Dato_Usuario')
export class DatosUsuarioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length: 50,
        name:'nombre'
    })
    nombreUsuario:string;

    @Column({
        type:'varchar',
        length:20,
        name:'telefono'
    })
    telefonoUsuario:string;

    @Column({
        type:'varchar',
        length:100,
        name:'direccion'
    })
    direccionUsuario:string
}