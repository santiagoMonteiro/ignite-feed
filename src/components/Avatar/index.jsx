import styles from "./styles.module.css";

export function Avatar({ src, noBorder }) {
  return (
    <img
      className={noBorder ? styles.avatar : styles.avatarWithBorder}
      src={src}
      alt=""
    />
  );
}
