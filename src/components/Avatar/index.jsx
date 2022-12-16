import styles from "./styles.module.scss";

export function Avatar({ src, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt=""
    />
  );
}
