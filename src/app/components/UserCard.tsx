import React from "react";
import Image from "next/image";

const UserCard = () => {
  return (
    <div className="flex items-center gap-3 w-full max-w-[325px] h-24 bg-white rounded-md shadow-md p-4">
      <Image
        alt="user-avatar"
        src="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b"
        width={56}
        height={56}
        className="lg:h-14 lg:w-14 rounded-full"
      />

      <div className="flex flex-col text-start">
        <span className="text-sm line-clamp-1">
          <strong>ID:</strong> 1
        </span>
        <span className="text-sm line-clamp-1">
          <strong>Name:</strong> Rodel Crisosto
        </span>
        <span className="flex text-sm w-full">
          <strong>Email:</strong>&nbsp;
          <span className="line-clamp-1">rodel.crisosto7@gmail.com</span>
        </span>
      </div>
    </div>
  );
};

export default UserCard;
