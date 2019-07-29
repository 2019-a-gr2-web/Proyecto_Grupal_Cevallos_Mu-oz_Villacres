import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
    precio_producto:number;
}