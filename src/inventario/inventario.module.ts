import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { inventario } from './modelos/inventario';

@Module({
  imports: [SequelizeModule.forFeature([inventario])],
  providers: [InventarioService],
  controllers: [InventarioController],
})
export class InventarioModule {}
