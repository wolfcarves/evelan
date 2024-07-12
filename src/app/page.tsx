import Container from "@/components/Container/Container";
import UserListsCard from "./components/UserListsCard";
import UserListsTitle from "./components/UserListsTitle";

const Home = async () => {
  return (
    <Container className="text-center">
      <UserListsTitle title="User List" />
      <UserListsCard />
    </Container>
  );
};

export default Home;
