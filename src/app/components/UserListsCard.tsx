"use client";

import UserCard from "./UserCard";
import useGetUserListQuery from "@/hooks/useGetUserListQuery";
import { Button } from "@/components";
import UserCardSkeleton from "./UserCardSkeleton";

const UserListsCard = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useGetUserListQuery();
  const usersData = data?.pages.flatMap((user) => user.data);

  return (
    <>
      <div className="flex flex-wrap justify-center mx-auto w-full max-w-7xl gap-3 mt-5 p-1.5">
        {usersData?.map((user) => (
          <UserCard key={user.id} data={user} />
        ))}

        {(isFetchingNextPage || isFetching) && (
          <>
            {Array.from({ length: 6 }).map((_, idx) => (
              <>
                <UserCardSkeleton key={idx} />
              </>
            ))}
          </>
        )}
      </div>

      <div className="py-4">
        <Button
          title="Load more"
          disabled={!hasNextPage}
          onClick={() => fetchNextPage()}
        />
      </div>
    </>
  );
};

export default UserListsCard;
