"use strict";

/*
|--------------------------------------------------------------------------
| NurseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

const Nurse = use("App/Models/Nurse");

class NurseSeeder {
  async run() {
    await Factory.model("App/Models/Nurse").createMany(5);
  }
}

module.exports = NurseSeeder;
