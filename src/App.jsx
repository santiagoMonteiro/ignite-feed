import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css"; 

export function App() {
  return (
    <>
      <Header />
      <Post author="Santiago Monteiro" content="Isso aqui é um post" />
    </>
  );
}
