import { uuid } from "uuidv4";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"; //Entity - Fazer ligação com o banco de dados. Column - definir abaixo qual o tipo de coluna.

@Entity('appointments') //Entity é uma função onde passa para o banco de dados tudo que esta na class abaixo.
class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
