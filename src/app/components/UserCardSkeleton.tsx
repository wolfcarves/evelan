import React from "react";

const UserCardSkeleton = () => {
  return (
    <div className="flex items-center gap-3 w-full max-w-[325px] h-24 bg-white rounded-md animate-pulse shadow-md p-4">
      <div className="h-14 w-14 rounded-full object-cover" />

      <div className="flex flex-col text-start">
        <div className="text-sm line-clamp-1"></div>
        <div className="text-sm line-clamp-1"></div>
      </div>
    </div>
  );
};

export default UserCardSkeleton;
