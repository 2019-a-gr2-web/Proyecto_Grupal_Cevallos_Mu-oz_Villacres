import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('db_Detalle_Alquiler')
export class DetalleAlquilerEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'int',
        name:'cantidad'
    })
    cantidad:number;

    @Column({
        type:'decimal',
        precision: 10,
        scale:2,
        name:'valor_unitario'
    })
    valorUnitario:number;

    @Column({
        type:'decimal',
        precision: 10,
        scale:2,
        name:'valor_total'
    })
    valorTotal:number;

    @Column({
        type:'date',
        default: '2019-06-19',
        name:'fecha_inicio'
    })
    fechaInicioAlquiler:Date;

    @Column({
        type:'date',
        default: '2019-06-20',
        name:'fecha_fin'
    })
    fechaFinAlquiler:Date;


}