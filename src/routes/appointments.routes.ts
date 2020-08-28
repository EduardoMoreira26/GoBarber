import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { parseISO } from "date-fns";

import AppointmentsRepository from "../repositories/AppointmentRepository";
import CreateAppointmentService from "../services/CreateAppointmentService";
import Appointment from "../models/Appointments";

const appointmentsRouter = Router();


appointmentsRouter.get("/", async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post("/", async (request, response) => {
  try {
    const { provider_id, date } = request.body;

    //Transforma a data de string em um objeto Date do JS
    const parsedDate = parseISO(date);
    //Service
    const CreateAppointment = new CreateAppointmentService();

    //Execução do service
    const appointment = await CreateAppointment.execute({
      date: parsedDate,
      provider_id,
    });

    //retornando resposa do service
    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

});

export default appointmentsRouter;
