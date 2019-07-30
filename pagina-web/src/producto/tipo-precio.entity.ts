import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductoPrecioEntity} from "./producto-precio.entity";

@Entity('db_Tipo_Precio')
export class TipoPrecioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'tipo_precio_nombre',
    })
    tipoPrecioNombre:string;

    @OneToMany(
        type => ProductoPrecioEntity,
        productoPrecio => productoPrecio
    )
    productoPrecio:ProductoPrecioEntity[];
}