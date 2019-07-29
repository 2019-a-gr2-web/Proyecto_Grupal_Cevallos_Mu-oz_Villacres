import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {CategoriaProductoEntity} from "./categoria-producto.entity";
import {ProductoEntity} from "./producto.entity";
import {ProductoPrecioEntity} from "./producto-precio.entity";
import {TipoPrecioEntity} from "./tipo-precio.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [
                CategoriaProductoEntity,
                ProductoEntity,
                ProductoPrecioEntity,
                TipoPrecioEntity
            ],
            'default'
        )
    ],
    controllers:[], //controladores
    providers:[], //servicios
    exports:[], // servicios
})
export class ProductoModule {

}