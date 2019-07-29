import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioRolEntity} from "./usuario/usuario-rol.entity";
import {DatosUsuarioEntity} from "./usuario/datos-usuario.entity";
import {PermisoEntity} from "./usuario/permiso.entity";
import {RolEntity} from "./usuario/rol.entity";
import {RolPermisoEntity} from "./usuario/rol-permiso.entity";
import {CategoriaProductoEntity} from "./producto/categoria-producto.entity";
import {ProductoEntity} from "./producto/producto.entity";
import {ProductoPrecioEntity} from "./producto/producto-precio.entity";
import {TipoPrecioEntity} from "./producto/tipo-precio.entity";
import {AlquilerEntity} from "./alquiler/alquiler.entity";
import {DetalleAlquilerEntity} from "./alquiler/detalle-alquiler.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            name: 'default', // Nombre de cadena de conexión
            type: 'mysql',
            host: 'localhost',
            port: 32777,
            username: 'root',
            password: 'root',
            database: 'proyectoweb',
            entities: [
                UsuarioEntity,
                UsuarioRolEntity,
                DatosUsuarioEntity,
                PermisoEntity,
                RolEntity,
                RolPermisoEntity,
                CategoriaProductoEntity,
                ProductoEntity,
                ProductoPrecioEntity,
                TipoPrecioEntity,
                AlquilerEntity,
                DetalleAlquilerEntity,
            ],
            synchronize: true,
            dropSchema: false
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
