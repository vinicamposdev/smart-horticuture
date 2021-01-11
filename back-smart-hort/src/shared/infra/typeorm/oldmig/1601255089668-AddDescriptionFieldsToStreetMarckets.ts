import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

const newColumns = [
  new TableColumn({
    name: 'rooms',
    type: 'smallint',
    isNullable: true,
  }),
  new TableColumn({
    name: 'vacancies',
    type: 'smallint',
    isNullable: true,
  }),
  new TableColumn({
    name: 'bathroom',
    type: 'smallint',
    isNullable: true,
  }),
  new TableColumn({
    name: 'price',
    type: 'bigint',
    isNullable: true,
  }),
  new TableColumn({
    name: 'area',
    type: 'decimal',
    isNullable: true,
  }),
  new TableColumn({
    name: 'postal_code',
    type: 'integer',
    isNullable: true,
  }),
  new TableColumn({
    name: 'category',
    type: 'varchar',
    isNullable: true,
  }),
  new TableColumn({
    name: 'description',
    type: 'text',
    isNullable: true,
  }),
  new TableColumn({
    name: 'garages',
    type: 'varchar',
    isNullable: true,
  }),
  new TableColumn({
    name: 'coordinates',
    type: 'point',
    isNullable: true,
  }),
]

export class AddDescriptionFieldsToStreetMarckets1601255089668
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('streemarcket', newColumns)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('streemarcket', newColumns)
  }
}
