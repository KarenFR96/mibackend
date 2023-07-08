import { Injectable } from '@nestjs/common';
import { productos } from './Modelos/productos';
import { productosDto } from './dto/productos.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(productos)
    private readonly productosModel: typeof productos,
  ) {}

  insert(dto: productosDto): Promise<productos> {
    return this.productosModel.create({
      nombre: dto.nombre,
      precio: dto.precio,
      descripcion: dto.descripcion,
      especificaciones_tecnicas: dto.especificaciones_tecnicas,
    });
  }

  select(): Promise<productos[]> {
    return this.productosModel.findAll();
  }
}
