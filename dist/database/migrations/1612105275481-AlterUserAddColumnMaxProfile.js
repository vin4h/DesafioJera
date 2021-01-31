"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterUserAddColumnMaxProfile1612105275481 = void 0;

var _typeorm = require("typeorm");

class AlterUserAddColumnMaxProfile1612105275481 {
  async up(queryRunner) {
    await queryRunner.addColumn('users', new _typeorm.TableColumn({
      name: 'max_profile',
      type: 'integer',
      default: 4
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn('users', 'max_profile');
  }

}

exports.AlterUserAddColumnMaxProfile1612105275481 = AlterUserAddColumnMaxProfile1612105275481;