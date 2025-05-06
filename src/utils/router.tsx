import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/components/layout/RootLayout";

import { Dashboard } from "@/components/pages/Dashboard";
import { ErrorBoundary } from "@/components/pages/ErrorBoundary";

import { ROUTES } from "@/utils/constants";

export const router = createBrowserRouter([
  {
    path: ROUTES.dashboard,
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
