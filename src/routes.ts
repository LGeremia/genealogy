import express from "express";
import { CreateFamilyMembersController } from "./controllers/members/CreateFamilyMembersController";
import { ReadFamilyMembersController } from "./controllers/members/ReadFamilyMembersController";

const routes = express.Router();
const createFamilyMembersController = new CreateFamilyMembersController();
const readFamilyMembersController = new ReadFamilyMembersController();

routes.get('/', (req, res) => {
    res.send('Ok!');
});

routes.post('/members', createFamilyMembersController.handle);
routes.get('/members', readFamilyMembersController.handle)

export default routes;