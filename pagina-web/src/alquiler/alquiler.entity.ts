import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

}