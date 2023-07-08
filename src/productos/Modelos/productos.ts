import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class productos extends Model {
  @Column
  nombre: string;
  @Column
  precio: number;
  @Column
  descripcion: string;
  @Column
  especificaciones_tecnicas: string;
}
