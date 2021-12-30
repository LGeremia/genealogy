import express from "express";
import { CreateFamilyMembersController } from "./controllers/members/CreateFamilyMembersController";
import { ReadFamilyMembersController } from "./controllers/members/ReadFamilyMembersController";
import { CreateUsersController } from "./controllers/users/CreateUsersController";

const routes = express.Router();
const createFamilyMembersController = new CreateFamilyMembersController();
const readFamilyMembersController = new ReadFamilyMembersController();
const createUsersController = new CreateUsersController();

routes.get('/', (req, res) => {
    res.send('Ok!');
});

routes.post('/members', createFamilyMembersController.handle);
routes.get('/members', readFamilyMembersController.handle);
routes.post('/users', createUsersController.handle);

export default routes;