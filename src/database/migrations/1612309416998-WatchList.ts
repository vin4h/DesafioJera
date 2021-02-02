import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class WatchList1612309416998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'watchlists',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'profile_id',
                        type: 'varchar'
                    },
                    {
                        name: 'genre',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );

        await queryRunner.createForeignKey('watchlists', new TableForeignKey({
            name: 'WatchListProfile',
            columnNames: ['profile_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'profiles',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('watchlists', 'WatchListProfile');

        await queryRunner.dropTable('watchlists');
    }

}
