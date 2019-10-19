"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", ({ response }) => {
  response.json({
    name: "Technurse - API",
    version: "v1",
    visit: new Date(),
    author: "Breno Pereira <breno.pereira@alumiar.me>"
  });
});


Route.on("/registro").render("registro");

Route.on("/login").render("login");

Route.post("/api/auth/login", "AuthController.login");
Route.post("/api/auth/register", "AuthController.store");

Route.get("/api/nurses", "NurseController.index").middleware("auth");
Route.get("/api/nurses/:id", "NurseController.show").middleware("auth");

Route.get("/api/user", "AuthController.profile").middleware("auth");
