const LoginEndpoints = {
  LOGIN_POST: "/login",
};

const AgentEndpoints = {
  CREATE_AGENT: "/agent",
  GET_AGENTS: "/agent",
  DELETE_AGENT: "/agent/:id",
};

const ListEndpoints = {
  FILE_POST: "/upload",
  DISTRIBUTED_LIST_GET: "getagenttask",
};

export const GlobalAPIEndpoints = {
    ...AgentEndpoints,
    ...ListEndpoints,
    ...LoginEndpoints
}