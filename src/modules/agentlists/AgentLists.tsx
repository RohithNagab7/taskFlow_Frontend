import { useForm } from "react-hook-form";
import GlobalCustomFormComp from "../../components/globalformcomp/GlobalCustomFormComp";
import {
  DistributedListWrapper,
  FormSection,
  MainContentWrapper,
} from "../../components/globalStyles/GlobalStyles";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileUploadSchema, type FileUploadFormValues } from "./AgentListsUtils";
import { useEffect, useState } from "react";
import { getAgentTasks, uploadTaskFile } from "./AgentListsServices";
import type { DistributedListTypes } from "../dashboard/DashboardUtils";
import AgentCard from "../../components/agentcard/AgentCard";

const initialState = {
  distributedLists: [],
};

export interface initialStateType {
  distributedLists: DistributedListTypes[];
}

const AgentLists = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FileUploadSchema),
  });

  const [state, setState] = useState<initialStateType>(initialState);

  const { distributedLists } = state;
  console.log(distributedLists);

  const submitHandler = async (data: FileUploadFormValues) => {
    try {
      console.log(data.file[0]);
      if (data.file?.[0]) {
        const res = await uploadTaskFile(data.file[0]);
        if (res.success) {
          setState((prevState) => ({
            ...prevState,
            distributedLists: res.data,
          }));
        }
        console.log("File uploaded:", res);
      } else {
        console.log("No file selected");
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const fetchAgentData = async () => {
    try {
      const res = await getAgentTasks();
      if (res.success) {
        setState((prevState) => ({
          ...prevState,
          distributedLists: res.data,
        }));
      }
      console.log("Agent tasks:", res);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  useEffect(() => {
    fetchAgentData();
  }, []);

  return (
    <MainContentWrapper>
      <FormSection fileupload={true}>
        <GlobalCustomFormComp
          control={control}
          handleSubmit={handleSubmit}
          errors={errors}
          fileUpload={true}
          submitHandler={submitHandler}
        />
      </FormSection>
      <DistributedListWrapper>
        {distributedLists.map((agent) => {
            return(
                <AgentCard distributedList={true} agent={agent}/>
            )
        })}
      </DistributedListWrapper>
    </MainContentWrapper>
  );
};

export default AgentLists;
