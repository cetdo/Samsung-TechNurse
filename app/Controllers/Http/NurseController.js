"use strict";

const Nurse = use("App/Models/Nurse");

class NurseController {
  async index({
    response
  }) {
    response.json({
      nurses: await Nurse.all()
    });
  }

  async show({
    params,
    response
  }) {
    response.json({
      nurse: await Nurse.find(params.id)
    });
  }

  async store({
    request,
    response
  }) {
    response.json({
      nurse: request
    })
  }
}

module.exports = NurseController;
