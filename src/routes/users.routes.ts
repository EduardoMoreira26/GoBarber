import { Router } from "express";

import CreateUserService from '../services/CreateUserService';
import CreateAppointmentService from "../services/CreateAppointmentService";

const usersRouter = Router();

usersRouter.post("/", async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

});

export default usersRouter;
