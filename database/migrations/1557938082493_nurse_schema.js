"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class NurseSchema extends Schema {
  up() {
    this.create("nurses", table => {
      table.increments();
      table.string("name");
      table.string("local");
      table.string("description");
      table.timestamps();
    });
  }

  down() {
    this.drop("nurses");
  }
}

module.exports = NurseSchema;
