import { createFileRoute } from "@tanstack/react-router";
import HomeScreen from "@/presentation/components/screens/home-screen";
import { useDependencies } from "@/presentation/providers/dependency-provider";
import useHomePage from "@/presentation/view-models/useHomePage";

const RouteComponent: React.FC = () => {
  const { appointmentsRepository } = useDependencies();
  const homePageProps = useHomePage({ appointmentsRepository });

  return (
    <HomeScreen
      appointments={homePageProps.appointments}
      isError={homePageProps.isErrorListing}
      isLoading={homePageProps.isLoading}
      createModalOpen={homePageProps.createModalOpen}
      isPendingCreate={homePageProps.isPendingCreate}
      createError={homePageProps.createError}
      form={homePageProps.form}
      refetch={homePageProps.refetch}
      handleSubmit={homePageProps.handleSubmit}
      openCreateModal={homePageProps.openCreateModal}
      closeCreateModal={homePageProps.closeCreateModal}
    />
  );
};

export const Route = createFileRoute("/(authenticated)/(dashboard)/home/")({
  component: RouteComponent,
});
