import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./styles.module.scss";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/santiagoMonteiro.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Santiago Monteiro</strong>

              <time title="11 de Maio às 08:13h" dateTime="2022-12-14 14:57:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
