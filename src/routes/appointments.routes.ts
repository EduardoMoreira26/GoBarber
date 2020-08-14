import { Router, request, response } from "express";
import { startOfHour, parseISO } from "date-fns";

import AppointmentsRepository from "../repositories/AppointmentRepository";

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get("/", (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post("/", (request, response) => {
  const { provider, date } = request.body;

//Transforma a data de string em um objeto Date do JS
  const parsedDate = parseISO(date);



  return response.json(appointment);

});

export default appointmentsRouter;
