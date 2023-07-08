import { Injectable } from '@nestjs/common';
import { inventario } from './modelos/inventario';
import { InjectModel } from '@nestjs/sequelize';
import { inventarioDto } from './dto/inventario-dto';

@Injectable()
export class InventarioService {
  constructor(
    @InjectModel(inventario)
    private readonly inventarioModel: typeof inventario,
  ) {}

  insert(dto: inventarioDto): Promise<inventario> {
    return this.inventarioModel.create({
      idProducto: dto.idProducto,
      producto: dto.producto,
      precio: dto.precio,
      cantidad_inicial: dto.cantidad_inicial,
      vendidos: dto.vendidos,
      cantidad_actual: dto.cantidad_actual,
      ventas_totales: dto.ventas_totales,
    });
  }

  select(): Promise<inventario[]> {
    return this.inventarioModel.findAll();
  }
}
