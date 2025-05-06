import { ApiRoute } from "@/api/endpoints";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Example mutation hook
export const useGetMe = () => {
  return useMutation<UserProps, unknown, void>({
    mutationKey: ["getMe"],
    mutationFn: async () => {
      const response = await axios.get<UserProps>(ApiRoute.getMe);

      return response.data;
    },
  });
};
