import { createFileRoute } from "@tanstack/react-router";
import AppointmentsTable from "@/presentation/components/organisms/appointments-table";

const RouteComponent: React.FC = () => {
  return (
    <div className="h-full w-full p-4">
      <AppointmentsTable appointments={mockAppointments} />
    </div>
  );
};

export const Route = createFileRoute("/(authenticated)/(dashboard)/home/")({
  component: RouteComponent,
});

const mockAppointments = [
  {
    id: 1,
    patient: "Ana Silva",
    date: "2024-01-15",
    time: "09:00",
    place: "Consultório A",
    description: "Consulta de rotina",
  },
  {
    id: 2,
    patient: "Carlos Santos",
    date: "2024-01-15",
    time: "10:30",
    place: "Consultório B",
    description: "Acompanhamento",
  },
  {
    id: 3,
    patient: "Maria Oliveira",
    date: "2024-01-15",
    time: "14:00",
    place: "Consultório A",
    description: "Primeira consulta",
  },
  {
    id: 4,
    patient: "João Pereira",
    date: "2024-01-16",
    time: "08:30",
    place: "Consultório C",
    description: "Retorno",
  },
  {
    id: 5,
    patient: "Lucia Costa",
    date: "2024-01-16",
    time: "11:00",
    place: "Consultório A",
    description: "Consulta especializada",
  },
  {
    id: 6,
    patient: "Pedro Lima",
    date: "2024-01-16",
    time: "15:30",
    place: "Consultório B",
    description: "Avaliação",
  },
  {
    id: 7,
    patient: "Sofia Rodrigues",
    date: "2024-01-17",
    time: "09:15",
    place: "Consultório A",
    description: "Consulta de rotina",
  },
  {
    id: 8,
    patient: "Roberto Alves",
    date: "2024-01-17",
    time: "13:45",
    place: "Consultório C",
    description: "Acompanhamento",
  },
  {
    id: 9,
    patient: "Fernanda Martins",
    date: "2024-01-18",
    time: "10:00",
    place: "Consultório B",
    description: "Primeira consulta",
  },
  {
    id: 10,
    patient: "Gabriel Souza",
    date: "2024-01-18",
    time: "16:00",
    place: "Consultório A",
    description: "Retorno",
  },
];
