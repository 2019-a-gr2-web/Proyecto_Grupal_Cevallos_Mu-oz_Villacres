import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('db_Categoria_Producto')
export class CategoriaProductoEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'nombre_categoria',
    })
    nombre_categoria:string;


}