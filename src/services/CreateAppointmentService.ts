import Appointment from "../models/Appointments";

class CreateAppointmentService {
  public execute(): Appointment {
    //inicia a hora
  const appointmentDate = startOfHour(parsedDate);

  const findAppointmentInSameDate = appointmentsRepository.findByDate(parsedDate);

  if(findAppointmentInSameDate){
    return response
      .status(400)
      .json({ message: "This appointment is already booked!" })
  }

 const appointment = appointmentsRepository.create({
   provider,
   date: appointmentDate,
 });

    return appointment;
  }
}

export default CreateAppointmentService;
