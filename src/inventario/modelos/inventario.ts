import { Column, Model, Table } from 'sequelize-typescript';
@Table
export class inventario extends Model {
  @Column
  idProducto: string;
  @Column
  producto: string;
  @Column
  precio: number;
  @Column
  cantidad_inicial: number;
  @Column
  vendidos: number;
  @Column
  cantidad_actual: number;
  @Column
  ventas_totales: number;
}
