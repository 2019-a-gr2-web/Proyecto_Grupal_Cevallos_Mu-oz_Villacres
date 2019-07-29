import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('db_Tipo_Precio')
export class TipoPrecioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'nombre_categoria',
    })
    tipo_precio_nombre
}