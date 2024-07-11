import React from "react";
import UserCard from "./UserCard";

const UserCardList = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto w-full max-w-7xl gap-3 mt-5 p-1.5">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

const UserCardListTitle = ({ title }: { title: string }) => {
  return (
    <div className="py-4">
      <h1 className="text-center font-mono font-bold text-2xl">{title}</h1>
    </div>
  );
};

UserCardList.Title = UserCardListTitle;

export default UserCardList;
