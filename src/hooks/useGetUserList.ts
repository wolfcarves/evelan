import { UserData } from "@/types/UserData";
import { cache } from "react";

interface UserDataResponse extends Response {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
  support: {
    url: string;
    text: string;
  };
}

export const useGetUserList = cache(
  async (page?: number): Promise<UserDataResponse> => {
    const response = await fetch(
      `https://reqres.in/api/users?page=${page ?? 1}`
    );

    if (!response.ok) {
      throw new Error("Users not found");
    }

    const data = await response.json();

    return data;
  }
);

export default useGetUserList;
