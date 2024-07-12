import React from "react";
import UserCardSkeleton from "./UserCardSkeleton";

const UserListsSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto w-full max-w-7xl gap-3 mt-5 p-1.5">
      <UserCardSkeleton />
    </div>
  );
};

export default UserListsSkeleton;
