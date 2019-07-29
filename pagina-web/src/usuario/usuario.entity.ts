import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

}