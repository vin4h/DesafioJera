import { query } from "express";
import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterFieldGenreGenreIdMovies1612544577361 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('movies', 'genre');

        await queryRunner.dropColumn('movies', 'genre_id');

        await queryRunner.addColumn('movies', new TableColumn({
            name: 'genre_ids',
            type: 'json'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('movies', 'genre_ids');

        await queryRunner.addColumn('movies', new TableColumn({
            name: 'genre_id',
            type: 'integer'
        }));

        await queryRunner.addColumn('movies', new TableColumn({
            name: 'genre',
            type: 'varchar'
        }));

    }

}
