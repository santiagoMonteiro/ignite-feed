import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./styles/global.css";
import styles from "./styles/App.module.scss";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Santiago Monteiro" content="Isso aqui é um post" />
        </main>
      </div>
    </>
  );
}
