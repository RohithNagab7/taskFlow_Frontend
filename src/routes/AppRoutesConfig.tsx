import { lazy } from "react";

const LoginPage = lazy(() => import("../modules/login/LoginPage"));
const DashboardPage = lazy(() => import("../modules/dashboard/DashboardPage"));
const AgentListPage = lazy(() => import("../modules/agentlists/AgentLists"));

export const PublicRoute = [{ id: 1, path: "/login", element: <LoginPage /> }];

export const PrivateRoutes = [
  { id: 1, path: "/", element: <DashboardPage /> },
  { id: 2, path: "/agentlist", element: <AgentListPage /> },
];
