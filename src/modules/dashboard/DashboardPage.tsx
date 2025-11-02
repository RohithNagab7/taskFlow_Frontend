import { useForm } from "react-hook-form";
import GlobalCustomFormComp from "../../components/globalformcomp/GlobalCustomFormComp";
import {
  AgentListWrapper,
  FormSection,
  MainContentWrapper,
} from "../../components/globalStyles/GlobalStyles";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  agentSchema,
  type AgentFormValues,
  type initialStateType,
} from "./DashboardUtils";
import { useEffect, useState } from "react";
import {
  createAgentService,
  deleteAgentService,
  getAgentsService,
} from "./DashboardServices";
import AgentCard from "../../components/agentcard/AgentCard";

const initialState = {
  agentsData: [],
};

const DashboardPage = () => {
  const [state, setState] = useState<initialStateType>(initialState);
  const { agentsData } = state;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(agentSchema),
  });

  const submitHandler = async (data: AgentFormValues) => {
    try {
      const res = await createAgentService(data);
      setState((prevState) => ({
        ...prevState,
        agentsData: res.data,
      }));
      console.log("Agent created:", res);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handleFetch = async () => {
    try {
      const res = await getAgentsService();
      setState((prevState) => ({
        ...prevState,
        agentsData: res.data,
      }));
      console.log("Agents:", res);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteAgentService(id);
      setState((prevState) => ({
        ...prevState,
        agentsData: res.data,
      }));
      console.log("Deleted:", res);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <MainContentWrapper>
      <FormSection>
        <GlobalCustomFormComp
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          submitHandler={submitHandler}
        />
      </FormSection>
      <AgentListWrapper>
        <h3>All Agents</h3>
        {agentsData.length > 0 ? (
          agentsData.map((agent) => (
            <AgentCard key={agent._id} agent={agent} onDelete={handleDelete} />
          ))
        ) : (
          <p>No agents found.</p>
        )}
      </AgentListWrapper>
    </MainContentWrapper>
  );
};

export default DashboardPage;
