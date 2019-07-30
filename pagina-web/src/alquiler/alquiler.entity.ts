import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {DetalleAlquilerEntity} from "./detalle-alquiler.entity";

@Entity('db_Alquiler')
export class AlquilerEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'decimal',
        precision: 10,
        scale:2,
        name:'total_alquiler'
    })
    totalAlquiler:number;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.alquiler
    )
    usuario:number;

    @OneToMany(
        type => DetalleAlquilerEntity,
        alquiler => alquiler
    )
    detalle: DetalleAlquilerEntity[]

}