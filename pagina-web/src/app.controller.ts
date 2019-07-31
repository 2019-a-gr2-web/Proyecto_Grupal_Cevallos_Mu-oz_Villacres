import { Controller, Get, Res, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioEntity } from './usuario/usuario.entity';
import { PermisoEntity } from './usuario/permiso.entity';
import { ProductoEntity } from './producto/producto.entity';
import { AlquilerEntity } from './alquiler/alquiler.entity';

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
      listaCategorias:listaCategorias
    })
  }
  
  @Get('vehiculos')
  autos(@Res() res){
    res.render('Publicaciones/publicaciones.ejs')
  }

  @Get('reserva')
  reserva(@Res() res){
    res.render('Usuario/reserva.ejs')
  }

  @Get('cuenta')
  cuenta(@Res() res){
    res.render('Usuario/cuenta.ejs')
  }
  
  @Get('publicaciones')
  publicaciones(@Res() res){
    res.render('Publicaciones/publicaciones.ejs')
  }
  
  @Get('permisos')
  permisos(@Res() res){

    const listaUsuarios=[{
      usuarioId:0,
      nombreUsuario:"",
      direccionUsuario:"",
      telefonoUsuario:"",
      correoUsuario:"",
      estadoUsuario:"",
    }];
    //const listaPermisos:Array<PermisoEntity>=[];
    //const listaPublicaciones:Array<ProductoEntity>=[];
    //const listaAlquiler:Array<AlquilerEntity>=[];

    res.render('Administrador/permisos.ejs',{
      listaUsuarios:listaUsuarios,
      //listaPermisos:listaPermisos,
      //listaPublicaciones:listaPublicaciones,
      //listaAlquiler:listaAlquiler
    })
  }

  @Get('vehiculos')
  vehiculos(@Res() res){
    res.render('Producto/vehiculos.ejs')
  }

}
