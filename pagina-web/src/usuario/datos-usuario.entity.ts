import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";

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
    direccionUsuario:string;

    @OneToOne(
        type => UsuarioEntity
    )
    @JoinColumn()
    usuario:UsuarioEntity;
}