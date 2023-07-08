import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { productos } from './Modelos/productos';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductosController } from './productos.controller';

@Module({
  imports: [SequelizeModule.forFeature([productos])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
