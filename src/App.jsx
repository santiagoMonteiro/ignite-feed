import { Header } from './components/Header'
import { Post } from './components/Post'

import './styles/global.css'
import styles from './styles/App.module.scss'
import { Sidebar } from './components/Sidebar'

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
  )
}
