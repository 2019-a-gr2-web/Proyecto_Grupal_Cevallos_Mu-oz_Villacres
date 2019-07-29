import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductoEntity} from "./producto.entity";

@Entity('db_Categoria_Producto')
export class CategoriaProductoEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'nombre_categoria',
    })
    nombreCategoria:string;

    @OneToMany(
        type => ProductoEntity,
        producto => producto
    )
    producto:ProductoEntity[];


}