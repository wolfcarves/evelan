"use server";

import Container from "@/components/Container/Container";
import UserCardList from "./components/UserCardList";

export default function Home(props: any) {
  return (
    <Container className="text-center">
      <UserCardList.Title title="User List" />
      <UserCardList />
    </Container>
  );
}
