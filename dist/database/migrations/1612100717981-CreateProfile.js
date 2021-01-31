"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProfile1612100717981 = void 0;

var _typeorm = require("typeorm");

class CreateProfile1612100717981 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'profiles',
      columns: [{
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        generationStrategy: 'uuid'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'user_id',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
    await queryRunner.createForeignKey('profiles', new _typeorm.TableForeignKey({
      name: 'ProfileUser',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('profiles', 'ProfileUser');
    await queryRunner.dropTable('profiles');
  }

}

exports.CreateProfile1612100717981 = CreateProfile1612100717981;