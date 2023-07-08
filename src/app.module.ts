import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { InventarioModule } from './inventario/inventario.module';
import { ListaClientesModule } from './lista_clientes/lista_clientes.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { ProductosModule } from './productos/productos.module';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ztechnology',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsuariosModule,
    RolesModule,
    AutenticacionModule,
    InventarioModule,
    ListaClientesModule,
    OrdenesModule,
    ProductosModule,
  ],
})
export class AppModule {}
