import { Body, Controller, Get, Post } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { inventarioDto } from './dto/inventario-dto';

@Controller('inventario')
export class InventarioController {
  constructor(private service: InventarioService) {}

  @Post()
  crearInventario(@Body() dto: inventarioDto) {
    return this.service.insert(dto);
  }

  @Get()
  todosLosInventarios() {
    return this.service.select();
  }
}
