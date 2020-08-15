import { Router } from "express";
import { parseISO } from "date-fns";

import AppointmentsRepository from "../repositories/AppointmentRepository";
import CreateAppointmentService from "../services/CreateAppointmentService";

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get("/", (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post("/", (request, response) => {
  try {
    const { provider, date } = request.body;

    //Transforma a data de string em um objeto Date do JS
      const parsedDate = parseISO(date);

      const CreateAppointment = new CreateAppointmentService(appointmentsRepository);

      const appointment = CreateAppointment.execute({ date: parsedDate,
      provider,
    });

      return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

});

export default appointmentsRouter;
