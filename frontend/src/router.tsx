import { createBrowserRouter } from "react-router";

import RootLayout from "./layouts/RootLayout.tsx";
import AddApplicationPage from "./pages/AddApplication.tsx";
import ApplicationDetailPage from "./pages/ApplicationDetail.tsx";
import ApplicationsPage from "./pages/ApplicationsList.tsx";
import DashboardPage from "./pages/Dashboard.tsx";
import EditApplicationPage from "./pages/EditApplication.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFound.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "login", Component: LoginPage },
      { path: "sign-up", Component: SignUpPage },
      { path: "applications", Component: ApplicationsPage },
      { path: "applications/new", Component: AddApplicationPage },
      { path: "applications/:applicationId", Component: ApplicationDetailPage },
      {
        path: "applications/:applicationId/edit",
        Component: EditApplicationPage,
      },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
