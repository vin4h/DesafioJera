import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class WatchedMovies1612294160130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'watchedmovies',
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

        await queryRunner.createForeignKey('watchedmovies', new TableForeignKey({
            name: 'WatchedMoveisprofile',
            columnNames: ['profile_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'profiles',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('watchedmovies', 'WatchedMoveisprofile');

        await queryRunner.dropTable('watchedmovies');
    }

}
