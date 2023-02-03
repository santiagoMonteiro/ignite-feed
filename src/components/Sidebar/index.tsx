import { PencilLine } from "phosphor-react"

import { Avatar } from "../Avatar";

import styles from './styles.module.scss'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        className={styles.coverImage}
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/santiagoMonteiro.png" />

        <strong>Santiago Monteiro</strong>
        <span>Web Developer</span>
      </div>
      
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
