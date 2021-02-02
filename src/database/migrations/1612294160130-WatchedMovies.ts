import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class WatchedMovies1612294160130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'watchedmovies',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'user_id',
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

        await queryRunner.createForeignKey('profiles', new TableForeignKey({
            name: 'WatchedMoveisUser',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('watchedmovies', 'WatchedMoveisUser');

        await queryRunner.dropTable('watchedmovies');
    }

}
