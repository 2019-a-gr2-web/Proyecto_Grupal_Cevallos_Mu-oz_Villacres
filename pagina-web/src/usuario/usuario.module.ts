import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
        imports:[
            TypeOrmModule.forFeature(
                [

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