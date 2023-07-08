import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class productos extends Model {
  @Column
  producto: string;
  @Column
  numero_orden: number;
  @Column
  estado_compra: string;
  @Column
  estado_orden: string;
  @Column
  total_comprado: number;
}
