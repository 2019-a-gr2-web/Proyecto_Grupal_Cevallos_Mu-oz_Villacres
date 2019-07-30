import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {TipoPrecioEntity} from "./tipo-precio.entity";
import {ProductoEntity} from "./producto.entity";

@Entity('db_Producto_Precio')
export class ProductoPrecioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'decimal',
        precision: 10,
        scale:2,
        name:'precio_producto'
    })
    precioProducto:number;

    @ManyToOne(
        type => TipoPrecioEntity,
        tipoPrecio => tipoPrecio.productoPrecio
    )
    tipoPrecio:number;

    @ManyToOne(
        type => ProductoEntity,
        producto => producto.productoPrecio
    )
    producto:number;
}