import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateProducts1604340012633
implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'weight',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'price',
            type: 'integer',
            default: 0,
          },
          {
            name: 'quantity',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'minimum',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'maximum',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'photo_1',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'photo_2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'street_marcket_id',
        type: 'uuid',
        isNullable: false,
      }),
    )

    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'marcket_product',
        columnNames: ['street_marcket_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'streetmarcket',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('products', 'marcket_product')
    await queryRunner.dropColumn('products', 'user_id')
    await queryRunner.dropTable('products')
  }
}
