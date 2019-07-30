import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioRolEntity} from "./usuario-rol.entity";
import {AlquilerEntity} from "../alquiler/alquiler.entity";

@Entity('db_Usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length:25,
        name:'correo'
    })
    correoUsuario:string;

    @Column({
        type:'varchar',
        name:'password_hash'
    })
    passwordHash:string;

    @Column({
        type:'varchar',
        name:'password_salt'
    })
    passwordSalt:string;

    @Column({
        type:'boolean',
        name:'estado'
    })
    estadoUsuario:boolean;

    @OneToMany(
        type => UsuarioRolEntity,
        rol => rol
    )
    rol: UsuarioRolEntity[]

    @OneToMany(
        type => AlquilerEntity,
        alquiler => alquiler
    )
    alquiler: AlquilerEntity[]

}