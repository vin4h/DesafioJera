import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddColumnMaxProfile1612105275481 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users',new TableColumn({
            name: 'max_profile',
            type: 'integer',
            default: 4
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'max_profile');
    }

}
