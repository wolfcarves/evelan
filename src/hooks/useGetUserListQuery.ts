import { UserData } from "@/types/UserData";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface UserDataResponse extends Response {
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

const getUserListKey = () => "get-user-list";

const useGetUserListQuery = () => {
  const fetchUsers = async ({ pageParam = 0 }): Promise<UserDataResponse> => {
    const response = await fetch(
      `https://reqres.in/api/users?page=${pageParam}`
    );

    const data = await response.json();
    return data;
  };

  return useInfiniteQuery({
    queryKey: [getUserListKey()],
    queryFn: fetchUsers,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.total_pages) {
        return undefined;
      }
      return lastPage.page + 1;
    },
  });
};

export default useGetUserListQuery;
