import { MigrationInterface, QueryRunner, TableColumn, Table } from 'typeorm'

export class AddPhotosToStreetMarckets1601134599011 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'streemarcket',
      new TableColumn({
        name: 'photo_1',
        type: 'varchar',
        isNullable: true,
      }),
    )
    await queryRunner.addColumn(
      'streemarcket',
      new TableColumn({
        name: 'photo_2',
        type: 'varchar',
        isNullable: true,
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('streemarcket', 'photo_1')
    await queryRunner.dropColumn('streemarcket', 'photo_2')
  }
}
