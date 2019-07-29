import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}