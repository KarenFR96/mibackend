import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { productosDto } from './dto/productos.dto';

@Controller('productos')
export class ProductosController {
  constructor(private service: ProductosService) {}

  @Post()
  crearProductos(@Body() dto: productosDto) {
    return this.service.insert(dto);
  }

  @Get()
  todosLosProductos() {
    return this.service.select();
  }
}