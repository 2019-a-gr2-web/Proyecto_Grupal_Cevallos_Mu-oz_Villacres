import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AlquilerEntity} from "./alquiler.entity";
import {DetalleAlquilerEntity} from "./detalle-alquiler.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [
                AlquilerEntity,
                DetalleAlquilerEntity
            ],
            'default'
        )
    ], // módulos
    controllers:[], // controladores
    providers:[], // servicios
    exports:[],

})
export class AlquilerModule {

}