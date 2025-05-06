import { BASE_API_URL } from "@/utils/constants";
import { router } from "@/utils/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { RouterProvider } from "react-router-dom";

axios.defaults.baseURL = BASE_API_URL;

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 0 } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
