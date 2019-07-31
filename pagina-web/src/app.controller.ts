import { Controller, Get, Res, Query, UploadedFile, Param, UseInterceptors, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioEntity } from './usuario/usuario.entity';
import { PermisoEntity } from './usuario/permiso.entity';
import { ProductoEntity } from './producto/producto.entity';
import { AlquilerEntity } from './alquiler/alquiler.entity';
import { RolEntity } from './usuario/rol.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('login')
  login(
    @Res() res,
    @Query() query,
  ){
    res.render('Login/login.ejs',{
      mensaje:"datos incorrectos",
      nombre:query.nombre,
      direccion:query.direccion,
      telefono:query.telefono,
      correo:query.correo,
      password:query.password
    });
  }



  @Get('registro')
  registro(
    @Res() res,
    @Query() query)
  {
    res.render('Login/registro.ejs',{
      mensaje:"Campos obligatorios ",
      nombre:query.nombre,
      direccion:query.direccion,
      telefono:query.telefono,
      correo:query.correo,
      password:query.password
    });
  }

  @Get('menu')
  menu(@Res() res){

    const listaCategorias=[
      {
      id:1,
      nombreCategoria:"Motos",
      imagenCategoria:"/imagenes/moto.png"
    },{
      id:2,
      nombreCategoria:"Automoviles",
      imagenCategoria:"/imagenes/automovil.png"
    },{
      id:3,
      nombreCategoria:"Jeep",
      imagenCategoria:"/imagenes/jeep.png"
    },{
      id:4,
      nombreCategoria:"Camionetas",
      imagenCategoria:"/imagenes/camionetas.png"
    }];

    res.render('Producto/menu.ejs',{
      listaCategorias:listaCategorias,
      publicar:1//permiso publicar
    })
  }
  
  @Get('vehiculos')
  autos(@Res() res){
    const listaVehiculos=[{
      id:1,
      descripcionCorta:"",
      imagenProducto:""
    }]
    res.render('Producto/vehiculos.ejs',{
      listaVehiculos:listaVehiculos
    })
  }

  @Get('reserva')
  reserva(@Res() res){
    
    res.render('Usuario/reserva.ejs',{
      propietario:UsuarioEntity
    })
  }

  @Get('cuenta')
  cuenta(@Res() res){
    const listaPublicaciones=[{
      nombreUsuario:"",
      nombreCategoria:"",
      nombreVehiculo:"",
      descripcionCorta:"",
      tipoPrecio:"",
      productoPrecio:""
    }]

    const listaAlquiler=[{
      usuario:"",
      totalAlquiler:"",
      fechaInicioAlquiler:"2019-06-20",
      fechaFinAlquiler:"2019-07-10",
      estadoAlquiler:""
    }]
    res.render('Usuario/cuenta.ejs',{
      listaPublicaciones:listaPublicaciones,
      listaAlquiler:listaAlquiler,
      usuario:UsuarioEntity
    })
  }
  
  @Get('publicaciones')
  publicaciones(@Res() res){
    res.render('Publicaciones/publicaciones.ejs',{

    })
  }
  
  @Get('gestion')
  gestion(@Res() res){

    const listaUsuarios=[{
      usuarioId:0,
      nombreUsuario:"",
      direccionUsuario:"",
      telefonoUsuario:"",
      correoUsuario:"",
      estadoUsuario:"",
    }];
    const listaRoles=[{
      nombreRol:"",
    }]

    const listaPermisos=[{
      nombrePermiso:"",
    }]

    const listaPublicaciones=[{
      nombreUsuario:"",
      nombreCategoria:"",
      nombreVehiculo:"",
      descripcionCorta:"",
      tipoPrecio:"",
      productoPrecio:""
    }]

    const listaAlquiler=[{
      usuario:"",
      totalAlquiler:"",
      fechaInicioAlquiler:"2019-06-20",
      fechaFinAlquiler:"2019-07-10",
      estadoAlquiler:""
    }]

    res.render('Administrador/gestion.ejs',{
      listaUsuarios:listaUsuarios,
      listaPublicaciones:listaPublicaciones,
      listaAlquiler:listaAlquiler,
      listaRoles:listaRoles,
      listaPermisos:listaPermisos,
    })
  }

  @Get('vehiculos')
  vehiculos(@Res() res){
    res.render('Producto/vehiculos.ejs')
  }

  @Get('permisos')
  permisos(@Res() res){
    res.render('Administracion/permisos.ejs')
  }

  @Get('publicar')
  publicar(
    @Res() res
  ){
    const listaCategorias=[{
      id:0,
      nombreCategoria:"",
    }]
    res.render('Publicaciones/publicar.ejs',{
      listaCategorias:listaCategorias
    })
  }

  @Get('du/:idTrago')
    @Render('publicar')
    subirArchivo(
        //@Param('idTrago') idTrago
    ) {
        
    }

    @Post('subirArchivo/:idTrago')
    @UseInterceptors(
        FileInterceptor(
            'imagen',
            {
                dest: __dirname + '/../archivos'
            }
        )
    )
    subirArchivoPost(
        @Param('idTrago') idTrago,
        @UploadedFile() archivo
    ){
        console.log(archivo);
        return { mensaje: 'ok' };
    }

}
