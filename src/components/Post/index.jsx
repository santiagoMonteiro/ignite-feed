import styles from "./styles.module.scss";

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/santiagoMonteiro.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Santiago Monteiro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-12-14 14:57:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 jane.design/doctorcare</p>
        <p>
          <a>#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
