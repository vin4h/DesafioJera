import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Movies1612521037100 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'movies',
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
                        name: 'genre_id',
                        type: 'integer'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'watched',
                        type: 'boolean'
                    },
                    {
                        name: 'to_watch',
                        type: 'boolean'
                    }
                ]
            })
        );
        await queryRunner.createForeignKey('movies', new TableForeignKey({
            name: 'moviesProfile',
            columnNames: ['profile_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'profiles',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));

    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('movies', 'moviesProfile');

        await queryRunner.dropTable('movies');
    }

}
