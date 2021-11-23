import express from "express";
import { CreateFamilyMemberController } from "./controllers/members/CreateFamilyMembersController";

const routes = express.Router();
const createFamilyMemberController = new CreateFamilyMemberController();

routes.get('/', (req, res) => {
    res.send('Ok!');
});

routes.post('/members', createFamilyMemberController.handle)

export default routes;