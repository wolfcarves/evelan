import UserCard from "./UserCard";
<<<<<<< Updated upstream
=======
import useGetUserList from "@/hooks/useGetUserList";
import { Button } from "@/components";

const UserCardList = async () => {
  const { data } = await useGetUserList(1);
>>>>>>> Stashed changes

const UserCardList = () => {
  return (
<<<<<<< Updated upstream
    <div className="flex flex-wrap justify-center mx-auto w-full max-w-7xl gap-3 mt-5 p-1.5">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
=======
    <div>
      <div className="flex flex-wrap justify-center mx-auto w-full max-w-7xl gap-3 mt-5 p-1.5">
        {data?.map((data) => (
          <UserCard key={data.id} data={data} />
        ))}
      </div>

      <div className="mt-5">
        <Button title="Load more" />
      </div>
>>>>>>> Stashed changes
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
