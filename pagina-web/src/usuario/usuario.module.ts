import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DatosUsuarioEntity} from "./datos-usuario.entity";
import {RolEntity} from "./rol.entity";
import {RolPermisoEntity} from "./rol-permiso.entity";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioRolEntity} from "./usuario-rol.entity";
import {PermisoEntity} from "./permiso.entity";


@Module({
        imports:[
            TypeOrmModule.forFeature(
                [
                    DatosUsuarioEntity,
                    PermisoEntity,
                    RolEntity,
                    RolPermisoEntity,
                    UsuarioEntity,
                    UsuarioRolEntity

                ],
                'default'
            )
        ],
        controllers:[],
        providers:[],
        exports:[]
    })
export class UsuarioModule {

}