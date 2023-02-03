import { ImgHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
