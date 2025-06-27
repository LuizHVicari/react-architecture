import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import DataTable from "../../molecules/data-table";

interface Appointment {
  id: number;
  patient: string;
  date: string;
  time: string;
  place: string;
  description: string;
}

interface Props {
  appointments: Appointment[];
  title?: string;
}

const AppointmentsTable: React.FC<Props> = ({
  appointments,
  title = "Minhas consultas",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAppointments = appointments.slice(startIndex, endIndex);

  const columns = ["Paciente", "Data", "Horário", "Local", "Descrição"];

  const renderAppointmentRow = (appointment: Appointment): string[] => [
    appointment.patient,
    new Date(appointment.date).toLocaleDateString("pt-BR"),
    appointment.time,
    appointment.place,
    appointment.description,
  ];

  const keyExtractor = (appointment: Appointment): number => appointment.id;

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          currentPage={currentPage}
          data={currentAppointments}
          itemsPerPage={itemsPerPage}
          keyExtractor={keyExtractor}
          renderRow={renderAppointmentRow}
          totalItems={appointments.length}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </CardContent>
    </Card>
  );
};

export default AppointmentsTable;
