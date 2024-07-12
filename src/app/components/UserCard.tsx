import React from "react";
import Image from "next/image";
import { UserData } from "@/types/UserData";

const UserCard = ({ data }: { data: UserData }) => {
  const { id: userId, avatar, first_name, last_name, email } = data;
  const fullname = `${first_name} ${last_name}`;

  return (
    <div className="flex items-center gap-3 w-full max-w-[325px] h-24 bg-white rounded-md shadow-md p-4">
      <Image
        alt="user-avatar"
        src={avatar}
        width={56}
        height={56}
        className="h-14 w-14 rounded-full object-cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcuqq4HgAGQQJTwHaq7AAAAABJRU5ErkJggg=="
      />

      <div className="flex flex-col text-start">
        <span className="text-sm line-clamp-1">
          <strong>ID:</strong> {userId}
        </span>
        <span className="text-sm line-clamp-1">
          <strong>Name:</strong> {fullname}
        </span>
        <span className="flex text-sm w-full">
          <strong>Email:</strong>&nbsp;
          <span className="line-clamp-1">{email}</span>
        </span>
      </div>
    </div>
  );
};

export default UserCard;
