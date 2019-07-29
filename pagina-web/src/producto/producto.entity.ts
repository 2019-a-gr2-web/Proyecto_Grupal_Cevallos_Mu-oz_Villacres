import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('db_Producto')
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length:100,
        name:'descripcion_corta'
    })
    descripcionCorta:string;

    @Column({
        type:'varchar',
        length:500,
        name:'descripcion_larga'
    })
    descripcionLarga:string;

    @Column({
        type:'varchar',
        length:10,
        name:'placa'
    })
    placa:string;

    @Column({
        type:'varchar',
        length:15,
        name:'color'
    })
    color:string;

    @Column({
        type:'varchar',
        length:20,
        name:'marca'
    })
    marca:string;

    @Column({
        type:'varchar',
        length:20,
        name:'modelo'
    })
    modelo:string;

}