import React from "react";
import type {
  AgentCardDataProps,
  TasksTypes,
} from "../../modules/dashboard/DashboardUtils";
import {
  CardDetails,
  CardWrapper,
  ColumnFlexDiv,
  DeleteButton,
  Divider,
  FlexRowDiv,
  Info,
  Name,
  TaskBlock,
  TaskHeader,
  TaskListContainer,
} from "../globalStyles/GlobalStyles";

interface AgentCardProps {
  agent: AgentCardDataProps;
  onDelete?: (id: string) => void;
  distributedList: boolean;
}

const AgentCard = ({
  agent,
  onDelete,
  distributedList = false,
}: AgentCardProps) => {
  return (
    <CardWrapper>
      <CardDetails>
        <Name>{agent.name}</Name>
        <Info>
          <strong>Email:</strong> {agent.email}
        </Info>
        <Info>
          <strong>Mobile Number:</strong> {agent.mobileNumber}
        </Info>

        {/* ✅ Lists header */}
        {distributedList && agent.tasks?.length > 1 && (
          <TaskHeader>Lists</TaskHeader>
        )}

         {distributedList && (
          <TaskListContainer>
            {agent.tasks.slice(1).map((list: TasksTypes, index: number) => (
              <React.Fragment key={index}>
                <ColumnFlexDiv>
                  <FlexRowDiv $justifycontent="flex-start" $gap="12px">
                    <Info>
                      <strong>First Name:</strong> {list.firstName}
                    </Info>
                    <Info>
                      <strong>Phone:</strong> {list.phone}
                    </Info>
                  </FlexRowDiv>
                  <Info>
                    <strong>{list.notes}</strong>
                  </Info>
                </ColumnFlexDiv>

                {/* ✅ Divider between each list item */}
                {index < agent.tasks.slice(1).length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </TaskListContainer>
        )}
      </CardDetails>

      {!distributedList && (
        <DeleteButton onClick={() => onDelete(agent._id)}>Delete</DeleteButton>
      )}
    </CardWrapper>
  );
};

export default AgentCard;
