import { Header } from "./components/Header";
import { Post } from "./components/Post";

export function App() {
  return (
    <>
      <Header />
      <Post author="Santiago Monteiro" content="Isso aqui é um post" />
    </>
  );
}
