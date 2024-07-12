import React from "react";
import UserCardSkeleton from "./UserCardSkeleton";

const UserListsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, idx) => (
        <UserCardSkeleton key={idx} />
      ))}
    </>
  );
};

export default UserListsSkeleton;
