import express from "express";
import { CreateFamilyMembersController } from "./controllers/members/CreateFamilyMembersController";
import { ReadFamilyMembersController } from "./controllers/members/ReadFamilyMembersController";
import { CreateUsersController } from "./controllers/users/CreateUsersController";
import { ReadUsersController } from "./controllers/users/ReadUsersController";
import { AuthenticationController } from "./controllers/AuthenticationConroller";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"


const routes = express.Router();
const createFamilyMembersController = new CreateFamilyMembersController();
const readFamilyMembersController = new ReadFamilyMembersController();
const createUsersController = new CreateUsersController();
const readUsersController = new ReadUsersController();
const authenticationController = new AuthenticationController();

routes.get('/', (req, res) => {
    res.send('Ok!');
});

routes.post('/login', authenticationController.handle);
routes.post('/logout', authenticationController.logout)

routes.post('/members', ensureAuthenticated, createFamilyMembersController.handle);
routes.get('/members', ensureAuthenticated, readFamilyMembersController.handle);
routes.post('/users', ensureAuthenticated, createUsersController.handle);
routes.get('/users', ensureAuthenticated, readUsersController.handle)

export default routes;