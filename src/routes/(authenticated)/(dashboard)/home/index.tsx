import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/presentation/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/presentation/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/presentation/components/ui/pagination";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

function RouteComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const totalPages = Math.ceil(mockAppointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAppointments = mockAppointments.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-full w-full p-4">
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Minhas consultas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Paciente</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Horário</TableHead>
                  <TableHead>Local</TableHead>
                  <TableHead>Descrição</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentAppointments.map((appointment) => (
                  <TableRow className="hover:bg-primary" key={appointment.id}>
                    <TableCell className="font-medium">
                      {appointment.patient}
                    </TableCell>
                    <TableCell>
                      {new Date(appointment.date).toLocaleDateString("pt-BR")}
                    </TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{appointment.place}</TableCell>
                    <TableCell>{appointment.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Mostrando {startIndex + 1} a {Math.min(endIndex, mockAppointments.length)} de {mockAppointments.length} consultas
            </p>
            
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
