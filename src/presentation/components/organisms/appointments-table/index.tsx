import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import DataTable from "../../molecules/data-table";
import { PlusIcon } from "lucide-react";
import TooltipButton from "../../molecules/tooltip-button";
import type { AppointmentSchema } from "@/core/schemas/appointment-schema";

interface Props {
  appointments: AppointmentSchema[];
  title?: string;
  onClickAdd: () => void;
}

const AppointmentsTable: React.FC<Props> = ({
  appointments,
  title = "Minhas consultas",
  onClickAdd,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAppointments = appointments.slice(startIndex, endIndex);

  const columns = ["Data", "Local", "Descrição", "Criado por"];

  const renderAppointmentRow = (appointment: AppointmentSchema): string[] => [
    new Date(appointment.date).toLocaleDateString("pt-BR"),
    appointment.place,
    appointment.description || "-",
    appointment.createdBy,
  ];

  const keyExtractor = (appointment: AppointmentSchema): number =>
    appointment.id;

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader className="flex flex-row w-full justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <TooltipButton tooltipTitle="Criar nova consulta" onClick={onClickAdd}>
          <PlusIcon />
        </TooltipButton>
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
